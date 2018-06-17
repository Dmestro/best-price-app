import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaucherEditorComponent } from './vaucher-editor.component';

describe('VaucherEditorComponent', () => {
  let component: VaucherEditorComponent;
  let fixture: ComponentFixture<VaucherEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaucherEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaucherEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
