import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaParqueoComponent } from './reserva-parqueo.component';

describe('ReservaParqueoComponent', () => {
  let component: ReservaParqueoComponent;
  let fixture: ComponentFixture<ReservaParqueoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaParqueoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaParqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
