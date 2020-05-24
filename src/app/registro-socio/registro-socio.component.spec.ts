import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSocioComponent } from './registro-socio.component';

describe('RegistroSocioComponent', () => {
  let component: RegistroSocioComponent;
  let fixture: ComponentFixture<RegistroSocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
