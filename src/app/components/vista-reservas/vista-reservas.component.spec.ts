import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaReservasComponent } from './vista-reservas.component';

describe('VistaReservasComponent', () => {
  let component: VistaReservasComponent;
  let fixture: ComponentFixture<VistaReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
