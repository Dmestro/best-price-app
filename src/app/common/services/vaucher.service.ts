import { Injectable } from '@angular/core';
import {LocalStorageServiceService} from './local-storage-service.service';
import {Vaucher} from '../models/Vaucher';

@Injectable({
  providedIn: 'root'
})
export class VaucherService {

  private final;
  readonly STORAGE_NAME: string = 'vauchers';

  constructor(private localStorageService: LocalStorageServiceService) {
    const storage = this.localStorageService.getItem(this.STORAGE_NAME);
    if (!storage) {
      this.localStorageService.setItem(this.STORAGE_NAME, []);
    }
  }

  public getAll(): Vaucher[] {
    return this.localStorageService.getItem(this.STORAGE_NAME);
  }

  public createVaucher(vaucher: Vaucher): void {
    const vauchers: Vaucher[] = this.localStorageService.getItem(this.STORAGE_NAME);
    vauchers.push(vaucher);

    this.localStorageService.setItem(this.STORAGE_NAME, vauchers);
  }

  public updateVaucher(vaucher: Vaucher): void {
    const vauchers: Vaucher[] = this.localStorageService.getItem(this.STORAGE_NAME);
    for (let i = 0; i < vauchers.length; i++) {
      if (vauchers[i].id === vaucher.id) {
        vauchers[i] = vaucher;
        break;
      }
    }

    this.localStorageService.setItem(this.STORAGE_NAME, vauchers);
  }

  public getById(id: String): Vaucher {
    const vauchers: Vaucher[] = this.localStorageService.getItem(this.STORAGE_NAME);

    return vauchers.find( item => item.id === id);

  }

  public deleteVaucher(vaucher: Vaucher): void {
    let vauchers: Vaucher[] = this.localStorageService.getItem(this.STORAGE_NAME);
    vauchers = vauchers.filter(item => item.id !== vaucher.id);

    this.localStorageService.setItem(this.STORAGE_NAME, vauchers);
  }
}
