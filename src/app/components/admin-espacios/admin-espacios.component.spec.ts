import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEspaciosComponent } from './admin-espacios.component';

describe('AdminEspaciosComponent', () => {
  let component: AdminEspaciosComponent;
  let fixture: ComponentFixture<AdminEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEspaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
