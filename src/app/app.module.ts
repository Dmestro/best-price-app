import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './common/components/header/header/header.component';
import { ShopsComponent } from './activities/shops/shops/shops.component';
import { RouterModule, Routes } from '@angular/router';
import { ActionButtonComponent } from './common/components/action-button/action-button/action-button.component';

const appRoutes: Routes = [
  { path: 'shops', component: ShopsComponent},
  { path: '', redirectTo: 'shops', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopsComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
