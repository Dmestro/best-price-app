import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bp-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.less']
})
export class ActionButtonComponent implements OnInit {
  @Input()
  public text = '';

  constructor() { }

  ngOnInit() {
  }

}
