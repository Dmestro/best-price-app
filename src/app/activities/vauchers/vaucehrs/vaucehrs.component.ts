import { Component, OnInit } from '@angular/core';
import {Vaucher} from '../../../common/models/Vaucher';
import {VaucherService} from '../../../common/services/vaucher.service';
import {Router} from '@angular/router';
import {PushNotificationsService} from '../../../common/services/push-notifications.service';

@Component({
  selector: 'bp-vaucehrs',
  templateUrl: './vaucehrs.component.html',
  styleUrls: ['./vaucehrs.component.less']
})
export class VaucehrsComponent implements OnInit {
  public _vauchers: Vaucher[] = [];

  constructor(private vaucherService: VaucherService,
              private router: Router,
              private _notificationService: PushNotificationsService
              ) {
    this._vauchers = this.vaucherService.getAll();
  }

  ngOnInit() {
  }

  _onRemoveVaucher(vaucher: Vaucher, event) {
    event.stopPropagation();
    this.vaucherService.deleteVaucher(vaucher);
    this._vauchers = this.vaucherService.getAll();
  }
}
