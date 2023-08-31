import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaAprendizComponent } from './bienvenida-aprendiz.component';

describe('BienvenidaAprendizComponent', () => {
  let component: BienvenidaAprendizComponent;
  let fixture: ComponentFixture<BienvenidaAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenidaAprendizComponent]
    });
    fixture = TestBed.createComponent(BienvenidaAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
