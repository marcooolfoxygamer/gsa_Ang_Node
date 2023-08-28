import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGeneralComponent } from './navbar-general.component';

describe('NavbarGeneralComponent', () => {
  let component: NavbarGeneralComponent;
  let fixture: ComponentFixture<NavbarGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarGeneralComponent]
    });
    fixture = TestBed.createComponent(NavbarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
