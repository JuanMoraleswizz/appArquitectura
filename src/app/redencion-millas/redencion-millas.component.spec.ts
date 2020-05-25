import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedencionMillasComponent } from './redencion-millas.component';

describe('RedencionMillasComponent', () => {
  let component: RedencionMillasComponent;
  let fixture: ComponentFixture<RedencionMillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedencionMillasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedencionMillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
