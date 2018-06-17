import {Injectable} from '@angular/core';
import {Shop} from '../models/Shop';
import {LocalStorageServiceService} from './local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private localStorageService: LocalStorageServiceService) {
    let storage = this.localStorageService.getItem('shops');
    if (!storage) {
      this.localStorageService.setItem('shops', []);
    }
  }

  public getAll(): Shop[] {
    let shops: Shop[] = this.localStorageService.getItem('shops');

    return shops;

  }

  public createShop(shop: Shop): void {
    let shops: Shop[] = this.localStorageService.getItem('shops');
    shops.push(shop);

    this.localStorageService.setItem('shops', shops);
  }

  public updateShop(shop: Shop) {
    let shops: Shop[] = this.localStorageService.getItem('shops');
    for (let i = 0; i < shops.length; i++) {
      if (shops[i].id === shop.id) {
        shops[i] = shop;
        break;
      }
    }

    this.localStorageService.setItem('shops', shops);
  }
}
