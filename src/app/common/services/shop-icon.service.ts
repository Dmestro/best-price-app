import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopIconService {

  private icons: {clazz, title}[] = [
    { clazz: 'magnit', title: 'Магнит'},
    { clazz: 'perekrestok', title: 'Перекресток'},
    { clazz: 'pyatereochka', title: 'Пятерочка'},
    { clazz: 'red-white', title: 'Красное & Белое'},
    { clazz: 'other', title: 'Другое'}
  ];

  constructor() { }

  public getIcons(): {clazz, title}[] {
    return this.icons;
  }
}
