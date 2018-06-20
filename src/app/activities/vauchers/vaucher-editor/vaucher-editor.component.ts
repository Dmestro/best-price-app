import { Component, OnInit } from '@angular/core';
import {Shop} from '../../../common/models/Shop';
import {ShopService} from '../../../common/services/shop.service';
import {Product} from '../../../common/models/Product';
import {Vaucher} from '../../../common/models/Vaucher';
import {VaucherService} from '../../../common/services/vaucher.service';
import { v4 as uuid } from 'uuid';
import {ActivatedRoute, Router} from '@angular/router';
import {PushNotificationsService} from '../../../common/services/push-notifications.service';
import * as moment from 'moment';
@Component({
  selector: 'bp-vaucher-editor',
  templateUrl: './vaucher-editor.component.html',
  styleUrls: ['./vaucher-editor.component.less']
})
export class VaucherEditorComponent implements OnInit {

  public isShopListOpen = false;
  public _isAddProductDialogOpen = false;

  public title = 'Добавление чека';

  public selectedShop: Shop = new Shop();
  public addedProduct: Product = new Product();
  public editedProduct: Product = null;

  public vaucher: Vaucher = new Vaucher();
  public shops: Shop[];
  public _isEditProductDialogOpen = false;

  private vaucherId: string = null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private shopsService: ShopService,
              private vaucherService: VaucherService,
              private notificationsService: PushNotificationsService) {
    this.shops = this.shopsService.getAll();

    this.vaucherId = this.route.snapshot.params['id'];

    if (this.vaucherId) {
      this.title = 'Редактирование чека';
      this.vaucher = vaucherService.getById(this.vaucherId);
    }
  }

  ngOnInit() {
  }

  public _onShopDialogOpen(): void {
    this.isShopListOpen = true;
  }

  public _onShopDialogClose(): void {
    this.isShopListOpen = false;
    this.vaucher.shop = new Shop();
  }

  public _onShopSelected(shop: Shop): void {
    this.vaucher.shop = shop;
  }

  public _onAddProduct(): void {
    this._isAddProductDialogOpen = false;
    this.vaucher.products.push(this.addedProduct);
    this.addedProduct = new Product();
  }

  public _onCancelProductAdding(): void {
    this.addedProduct = new Product();
    this._isAddProductDialogOpen = false;
    this._isEditProductDialogOpen = false;
  }

  _onRemoveProduct(product: Product) {
    this.vaucher.products = this.vaucher.products.filter(item => item !== product);
  }

  public _getTotalPrice(): number {
    let total = 0;
    this.vaucher.products.forEach(item => {
      total += item.count * item.price;
    });

    this.vaucher.totalPrice = total;

    return total;
  }

  _onEditShop(product: Product) {
    this.editedProduct = product;
    this._isEditProductDialogOpen = true;
  }

  _onSave(): void {
    if (!this.vaucherId) {
      this.vaucher.id = uuid();
      this.vaucherService.createVaucher(this.vaucher);
    } else {
      this.vaucherService.updateVaucher(this.vaucher);
    }

    if (!this.vaucher.shop.id) {
      this.vaucher.shop.id = uuid();
      this.shopsService.createShop(this.vaucher.shop);
    }
    this.checkBestPrice();
    this.router.navigateByUrl('/vauchers');

    // let data: any[] = [];
    // data.push({
    //   'title': 'Чек добавлен',
    //   'alertContent': this.vaucher.shop.name + ":" + this.vaucher.totalPrice;
    // });

    // this.notificationsService.generateNotification(data);



  }

  _onCancel(): void {
    this.router.navigateByUrl('/vauchers');
  }

  private checkBestPrice(): void {
    const vauchers = this.vaucherService.getAll();

    const data: any[] = [];

    const currentVaucherDate: Date = moment(this.vaucher.date, 'DD/MM/YYYY').toDate();

   this.vaucher.products.forEach(item => {
     vauchers.forEach(vaucher => {
       const vaucherDate: Date = moment(vaucher.date, 'DD/MM/YYYY').toDate();

       const dateDelta = currentVaucherDate.getTime() - vaucherDate.getTime();

       console.log('DD=', dateDelta);

       if (dateDelta <= 2592000000 && dateDelta >= 0) {
         let findedProducts: Product[] = [];
         vaucher.products.forEach(vp => {
           if (vp.name === item.name) {
             findedProducts.push(vp);
           }
         });

         findedProducts = findedProducts.filter(findedProduct => {
           return findedProduct.price < item.price;
         });

         findedProducts.forEach(findedProduct => data.push(
           {
             'title': 'Лучшая цена на товар ' + findedProduct.name,
             'alertContent': findedProduct.price + 'р.' + vaucher.shop.name + ' ' + vaucher.date
       }
       ));
       }



     });
   });



   this.notificationsService.generateNotification(data);

   // data.forEach(item => {
   //   this.notificationsService.generateNotification([item]);
   // });
  }

  _onSelectPhoto() {
    const self = this;
    const field = document.getElementById('imgInp');

    const reader = new FileReader();

    field.onchange = function (event) {
      if (field.files && field.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
          self.addedProduct.photo = e.target.result;
        };

        reader.readAsDataURL(field.files[0]);
      }
    };

    field.click();
  }

  _onEditPhoto() {
    const self = this;
    const field = document.getElementById('imgInp');

    const reader = new FileReader();

    field.onchange = function (event) {
      if (field.files && field.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
          self.editedProduct.photo = e.target.result;
        };

        reader.readAsDataURL(field.files[0]);
      }
    };

    field.click();
  }

  public onQrCodeButtonClick() {
    const input = document.getElementById('qrcode-input');
    input.click();
    console.log(input);
  }

  _onVaucherRecognized($event: any) {
    console.log('MY VAUCHER=', $event);
    $event.items.forEach(item => {
      const product: Product = new Product();
      product.name = item[0];
      product.price = item[1];
      product.count = item[2];
      this.vaucher.products.push(product);
    });

    if ($event.shop) {
      const shop = new Shop();
      shop.name = $event.shop;
      this._onShopSelected(shop);
    }
    if ($event.check_time) {
      const a = moment($event.check_time).format('DD/MM/YYYY');
      this.vaucher.date = a;
      console.log(a);
    }

    console.log('VA=', this.vaucher);
  }
}
