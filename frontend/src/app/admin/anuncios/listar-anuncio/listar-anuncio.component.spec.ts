import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnuncioComponent } from './listar-anuncio.component';

describe('ListarAnuncioComponent', () => {
  let component: ListarAnuncioComponent;
  let fixture: ComponentFixture<ListarAnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAnuncioComponent]
    });
    fixture = TestBed.createComponent(ListarAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
