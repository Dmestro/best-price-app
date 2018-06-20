import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs/internal/Subscription';
import {QrCodeReader} from './qr-code-reader.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'bp-qr-code-reader',
  templateUrl: './qr-code-reader.component.html',
  styleUrls: ['./qr-code-reader.component.less']
})
export class QrCodeReaderComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  public result = '';

  @Output()
  onResponse = new EventEmitter<any>();

  constructor(private qrReader: QrCodeReader, private http: HttpClient) { }

  ngOnInit() {
  }



  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onFileChange(event) {
    const file = event.target.files[0];
    this.subscription = this.qrReader.decode(file)
      .subscribe(decodedString => {
        console.log(decodedString);
        this.result = decodedString;
        // alert(decodedString);

        if (decodedString !== 'error decoding QR Code') {
          const url = 'http://localhost:3000/check/' + decodedString;

          this.http.get(url).subscribe(respone => {
            console.log(respone);
            this.onResponse.emit(respone);
          });
        }


      });
  }

}
