import {Shop} from './Shop';
import {Product} from './Product';

export class Vaucher {
  id: string;
  shop: Shop;
  products: Product[] = [];
  totalPrice: number;
  date: string;

  constructor() {
    this.shop = new Shop();
  }
}
