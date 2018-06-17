import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './common/components/header/header/header.component';
import { ShopsComponent } from './activities/shops/shops/shops.component';
import { RouterModule, Routes } from '@angular/router';
import { ActionButtonComponent } from './common/components/action-button/action-button/action-button.component';
import {ButtonComponent} from './common/components/button/button.component';
import {FieldComponent} from './common/components/field/field.component';
import { ShopEditorComponent } from './activities/shops/shop-editor/shop-editor.component';
import {FormsModule} from '@angular/forms';
import { ShopDetailsComponent } from './activities/shops/shop-details/shop-details.component';
import { VaucehrsComponent } from './activities/vauchers/vaucehrs/vaucehrs.component';
import { VaucherEditorComponent } from './activities/vauchers/vaucher-editor/vaucher-editor.component';

const appRoutes: Routes = [
  { path: 'shops', component: ShopsComponent},
  {path: 'create-shop', component: ShopEditorComponent},
  {path: 'change-shop/:id', component: ShopEditorComponent},
  {path: 'shop-details/:id', component: ShopDetailsComponent},
  { path: 'vauchers', component: VaucehrsComponent},
  { path: 'create-vaucher', component: VaucherEditorComponent},

  { path: '', redirectTo: 'shops', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopsComponent,
    ActionButtonComponent,
    ButtonComponent,
    FieldComponent,
    ShopEditorComponent,
    ShopDetailsComponent,
    VaucehrsComponent,
    VaucherEditorComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT7B1pqdA7JVx8hm4VlNDHIVUqZes8G_k'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
