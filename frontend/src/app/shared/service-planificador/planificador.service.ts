import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanificadorModel, MusculosModel, Ejercicios_MusculosModel } from './planificador.model';

@Injectable({
  providedIn: 'root'
})
export class PlanificadorService {

  BASE_URL = "http://localhost:9300"

  constructor(private http: HttpClient) { }

  obtenerMusculos() {
    return this.http.get<MusculosModel[]>(this.BASE_URL+'/musculos');
  }

  agregarPlanificador(planificador: PlanificadorModel) {
    return this.http.post<string>(`${this.BASE_URL}/planificador`, planificador);
  }

  obtenerEjercicios_Musculo(musculo: string) {
    return this.http.get<Ejercicios_MusculosModel[]>(`${this.BASE_URL}/ejercicios_musculo/${musculo}`)
  }
}
