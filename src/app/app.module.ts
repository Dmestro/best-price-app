import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QrCodeReaderComponent } from './common/components/qr-code-reader/qr-code-reader.component';
import {QrCodeReader} from "./common/components/qr-code-reader/qr-code-reader.service";
import { HeaderComponent } from './components/header/header.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {HttpClient, HttpClientJsonpModule, HttpClientModule, HttpHandler} from "@angular/common/http";
import {Jsonp} from "@angular/http";
import { ButtonComponent } from './common/components/button/button.component';
import { FieldComponent } from './common/components/field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    QrCodeReaderComponent,
    HeaderComponent,
    ButtonComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [QrCodeReader],
  bootstrap: [AppComponent]
})
export class AppModule { }
