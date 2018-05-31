import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {QrCodeReader} from "./qr-code-reader.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'bp-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.less']
})
export class QrCodeReaderComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  public result: string = '';

  constructor(private qrReader: QrCodeReader, private http: HttpClient) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onFileChange(event) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(decodedString => {
        console.log(decodedString);
        this.result = decodedString;
        alert(decodedString);

        let url = "https://rest-fns-check.herokuapp.com/check/";
        url+=decodedString;


        let headers = new HttpHeaders();
        headers.set("Host", "");
        headers.set("Origin", "");


        let a = this.http.get(url).subscribe(respone=>console.log(respone));
      });
  }

}
