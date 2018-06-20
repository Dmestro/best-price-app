import { Component } from '@angular/core';
import {PushNotificationsService} from './common/services/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';

  constructor(private notificationService: PushNotificationsService) {
    this.notificationService.requestPermission();
  }
}
