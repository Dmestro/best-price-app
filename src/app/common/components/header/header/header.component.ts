import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public _title = 'Магазины';

  public _routes: any[] = [
    {title: 'Магазины', link: '/shops'},
    {title: 'Чеки', link: '/receipts'},
    {title: 'О программе', link: '/about'},

  ];

  constructor() { }

  ngOnInit() {
  }
  public _onRouteChange(route: {tile: string, link: string}): void{
    this._title = route.tile;
  }

}
