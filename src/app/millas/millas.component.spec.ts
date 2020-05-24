import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillasComponent } from './millas.component';

describe('MillasComponent', () => {
  let component: MillasComponent;
  let fixture: ComponentFixture<MillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
