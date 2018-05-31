import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../../common/services/shop.service';
import {Shop} from '../../../common/models/Shop';

@Component({
  selector: 'bp-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.less']
})
export class ShopsComponent implements OnInit {
  public _shops: Shop[] = [];

  constructor(private shopService: ShopService) {
    this._shops = this.shopService.getAll();
  }

  ngOnInit() {
  }

}
