import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAnuncioComponent } from './agregar-anuncio.component';

describe('AgregarAnuncioComponent', () => {
  let component: AgregarAnuncioComponent;
  let fixture: ComponentFixture<AgregarAnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAnuncioComponent]
    });
    fixture = TestBed.createComponent(AgregarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
