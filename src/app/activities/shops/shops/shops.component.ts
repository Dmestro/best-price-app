import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../../common/services/shop.service';
import {Shop} from '../../../common/models/Shop';
import { v4 as uuid } from 'uuid';
import {Router} from '@angular/router';

@Component({
  selector: 'bp-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.less']
})
export class ShopsComponent implements OnInit {
  public _shops: Shop[] = [];
  public _shopsBackup: Shop[]= [];

  public _searchString: string = '';
  public _visibility: string = 'visible';

  public _icons: {clazz, title}[] = [
    { clazz: 'magnit', title: 'Магнит'},
    { clazz: 'perekrestok', title: 'Перекресток'},
    { clazz: 'pyatereochka', title: 'Пятерочка'},
    { clazz: 'other', title: 'Другое'}
  ];

  constructor(private shopService: ShopService, private router: Router) {
    this._shops = this.shopService.getAll();
    this._shopsBackup = this.shopService.getAll();
    console.log('new uid: ', uuid());
  }

  ngOnInit() {
  }

  _onRemoveShop(shop: Shop, event): void {
    event.stopPropagation();
    this.shopService.deleteShop(shop);
    this._shops = this.shopService.getAll();
  }

 public _updateModelFilter($event) {
    this._searchString = $event;
    console.log("EV=", event);
    if (!$event) {
      this._shops = JSON.parse(JSON.stringify(this._shopsBackup));
    }else {
      this._shops = this._shopsBackup.filter(item => {
        return item.name.indexOf($event) > -1;
      });
    }
 }
}
