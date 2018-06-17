import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }

  public setItem(key: string, object: any): any{
    localStorage.setItem(key, JSON.stringify(object));
  }

  public getItem(key: string){
    let item = localStorage.getItem(key);

    if(item){
      return JSON.parse(item);
    } else {
      return null;
    }

  }
}
