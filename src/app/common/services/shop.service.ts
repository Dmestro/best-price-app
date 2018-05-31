import { Injectable } from '@angular/core';
import {Shop} from '../models/Shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  public getAll(): Shop[] {
    let shops: Shop[] = [];
    shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}}); shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}}); shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}}); shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}}); shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}}); shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}}); shops.push({id: '123', name: 'Магнит', description: 'Тестовый магнит', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Перекресток', description: 'Тестовый перекресток', coords: {lat: 10, lon: 10}});
    shops.push({id: '123', name: 'Пятерочка', description: 'Тестовая пятерочка ', coords: {lat: 10, lon: 10}});

    return shops;

  }
}
