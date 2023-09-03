import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaInstructorComponent } from './bienvenida-instructor.component';

describe('BienvenidaInstructorComponent', () => {
  let component: BienvenidaInstructorComponent;
  let fixture: ComponentFixture<BienvenidaInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenidaInstructorComponent]
    });
    fixture = TestBed.createComponent(BienvenidaInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
