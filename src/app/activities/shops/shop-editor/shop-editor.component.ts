import {Component, Input, OnInit} from '@angular/core';
import {Shop} from '../../../common/models/Shop';
import {ActivatedRoute, Router} from '@angular/router';
import { v4 as uuid } from 'uuid';
import {LocalStorageServiceService} from '../../../common/services/local-storage-service.service';
import {ShopService} from '../../../common/services/shop.service';
import {ShopIconService} from '../../../common/services/shop-icon.service';

@Component({
  selector: 'bp-shop-editor',
  templateUrl: './shop-editor.component.html',
  styleUrls: ['./shop-editor.component.less']
})
export class ShopEditorComponent implements OnInit {


  private shopId: string;
  @Input()
  public shop: Shop = new Shop();
  public title: String = 'Добавление магазина';
  public actionTitle = 'Добавить';

  public lat: number = 53.203352; // 53.203352, 50.158921
  public lng: number = 50.158921;
  _isAddIconDialogOpen: boolean = false;

  public _icons: {clazz, title}[];

  constructor(private router: Router,
              private localStorageService: LocalStorageServiceService,
              private route: ActivatedRoute,
              private shopsService: ShopService,
              private shopIconService: ShopIconService) {
    this._icons = shopIconService.getIcons();

     this.shopId = this.route.snapshot.params['id'];
    if(this.shopId){
      this.title = 'Редактирование магазина';
      this.actionTitle = 'Сохранить';
      let shops: Shop[] = this.localStorageService.getItem('shops');
      this.shop = shops.find(item => item.id === this.shopId);
    } else {
      if (!this.shop.coords) {
        this.shop.coords = {
          lat: null,
          lon: null
        };
      }
    }

  }

  ngOnInit() {
  }

  _addMarker($event) {
    this.shop.coords.lat = $event.coords.lat;
    this.shop.coords.lon = $event.coords.lng;
  }

  _onCancel(): void {
    this.router.navigateByUrl('/shops');
  }
  _onSave(): void {
    if(!this.shopId) {
      this.shop.id = uuid();
      this.shopsService.createShop(this.shop);
    } else {
      this.shopsService.updateShop(this.shop);
    }

    this.router.navigateByUrl('/shops');

  }

  _onIconSelected(clazz) {
    this.shop.icon = clazz;
    console.log('asas');
  }
}
