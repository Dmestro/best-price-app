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

  constructor(private shopService: ShopService, private router: Router) {
    this._shops = this.shopService.getAll();
    console.log('new uid: ', uuid());
  }

  ngOnInit() {
  }

}
