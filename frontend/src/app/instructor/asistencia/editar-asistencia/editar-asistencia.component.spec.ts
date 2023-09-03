import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsistenciaComponent } from './editar-asistencia.component';

describe('EditarAsistenciaComponent', () => {
  let component: EditarAsistenciaComponent;
  let fixture: ComponentFixture<EditarAsistenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAsistenciaComponent]
    });
    fixture = TestBed.createComponent(EditarAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
