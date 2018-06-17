import { Component, OnInit } from '@angular/core';
import {Shop} from '../../../common/models/Shop';
import {ShopsComponent} from '../../shops/shops/shops.component';
import {ShopService} from '../../../common/services/shop.service';

@Component({
  selector: 'bp-vaucher-editor',
  templateUrl: './vaucher-editor.component.html',
  styleUrls: ['./vaucher-editor.component.less']
})
export class VaucherEditorComponent implements OnInit {

  public isShopListOpen = false;

  public title: string = 'Добавление чека';
  public selectedShop: Shop = new Shop();
  public shops: Shop[];

  constructor(private shopsService: ShopService) {
    this.shops = this.shopsService.getAll();
  }

  ngOnInit() {
  }

  public _onShopDialogOpen(): void {
    this.isShopListOpen = true;
  }

  public _onShopSelected(shop: Shop): void {
    this.selectedShop = shop;
  }

}
