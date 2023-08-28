import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogAdminComponent } from './navbar-log-admin.component';

describe('NavbarLogAdminComponent', () => {
  let component: NavbarLogAdminComponent;
  let fixture: ComponentFixture<NavbarLogAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLogAdminComponent]
    });
    fixture = TestBed.createComponent(NavbarLogAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
