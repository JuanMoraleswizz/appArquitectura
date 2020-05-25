import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSociosComponent } from './lista-socios.component';

describe('ListaSociosComponent', () => {
  let component: ListaSociosComponent;
  let fixture: ComponentFixture<ListaSociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
