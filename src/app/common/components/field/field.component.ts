import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bp-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
  @Input()
  public placeholder: string;
  @Input()
  public title: string;
  @Input()
  public model: any;
  @Output()
  updateModel = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  _onModelChange($event) {
    this.updateModel.emit($event);
  }
}
