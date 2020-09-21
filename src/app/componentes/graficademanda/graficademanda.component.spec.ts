import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficademandaComponent } from './graficademanda.component';

describe('GraficademandaComponent', () => {
  let component: GraficademandaComponent;
  let fixture: ComponentFixture<GraficademandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficademandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficademandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
