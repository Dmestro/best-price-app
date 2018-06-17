import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaucehrsComponent } from './vaucehrs.component';

describe('VaucehrsComponent', () => {
  let component: VaucehrsComponent;
  let fixture: ComponentFixture<VaucehrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaucehrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaucehrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
