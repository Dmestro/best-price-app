import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input()
  public text = '';

  constructor() { }

  ngOnInit() {
  }

}
