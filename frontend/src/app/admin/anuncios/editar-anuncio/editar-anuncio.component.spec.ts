import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnuncioComponent } from './editar-anuncio.component';

describe('EditarAnuncioComponent', () => {
  let component: EditarAnuncioComponent;
  let fixture: ComponentFixture<EditarAnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAnuncioComponent]
    });
    fixture = TestBed.createComponent(EditarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
