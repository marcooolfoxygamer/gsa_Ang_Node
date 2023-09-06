import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionContrasenaComponent } from './recuperacion-contrasena.component';

describe('RecuperacionContrasenaComponent', () => {
  let component: RecuperacionContrasenaComponent;
  let fixture: ComponentFixture<RecuperacionContrasenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperacionContrasenaComponent]
    });
    fixture = TestBed.createComponent(RecuperacionContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
