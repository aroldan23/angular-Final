import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParqueosComponent } from './admin-parqueos.component';

describe('AdminParqueosComponent', () => {
  let component: AdminParqueosComponent;
  let fixture: ComponentFixture<AdminParqueosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminParqueosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminParqueosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
