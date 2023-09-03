import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAsistenciaComponent } from './agregar-asistencia.component';

describe('AgregarAsistenciaComponent', () => {
  let component: AgregarAsistenciaComponent;
  let fixture: ComponentFixture<AgregarAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAsistenciaComponent]
    });
    fixture = TestBed.createComponent(AgregarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
