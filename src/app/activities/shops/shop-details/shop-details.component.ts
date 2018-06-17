import { Component, OnInit } from '@angular/core';
import {LocalStorageServiceService} from '../../../common/services/local-storage-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Shop} from '../../../common/models/Shop';
import {ShopService} from '../../../common/services/shop.service';

@Component({
  selector: 'bp-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.less']
})
export class ShopDetailsComponent implements OnInit {
  public shop: Shop;

  public lat: number = 53.203352; // 53.203352, 50.158921
  public lng: number = 50.158921;

  constructor(private localStorageSerivce: LocalStorageServiceService,
              private shopSerive: ShopService,
              private router: Router,
              private route: ActivatedRoute) {
    let shopId: string = this.route.snapshot.params['id'];
    let shops: Shop[] = this.shopSerive.getAll();
    this.shop = shops.find(item => item.id === shopId);
  }

  ngOnInit() {
  }

  _onChange(){
    return this.router.navigateByUrl('change-shop/'+ this.shop.id);
  }

  _onCancel(){
    return this.router.navigateByUrl('shops');
  }

}
