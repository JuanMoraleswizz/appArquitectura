import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSocioComponent } from './dialog-socio.component';

describe('DialogSocioComponent', () => {
  let component: DialogSocioComponent;
  let fixture: ComponentFixture<DialogSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
