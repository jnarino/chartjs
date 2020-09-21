import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleaporteshidricosComponent } from './detalleaporteshidricos.component';

describe('DetalleaporteshidricosComponent', () => {
  let component: DetalleaporteshidricosComponent;
  let fixture: ComponentFixture<DetalleaporteshidricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleaporteshidricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleaporteshidricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
