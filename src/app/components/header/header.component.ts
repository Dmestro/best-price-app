import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onQrCodeButtonClick(){
    let input = document.getElementById("qrcode-input");
    input.click();
    console.log(input);
  }

}
