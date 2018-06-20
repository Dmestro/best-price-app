import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public _title = 'Магазины';

  public _routes: any[] = [
    {title: 'Покупки', link: '/vauchers'},
    {title: 'Магазины', link: '/shops'},
    {title: 'О программе', link: '/about'},

  ];

  constructor() { }

  ngOnInit() {
  }
  public _onRouteChange(route: {title: string, link: string}): void{
    this._title = route.title;
  }

}
