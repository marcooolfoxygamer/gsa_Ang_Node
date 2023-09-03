import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsistenciaListaModel } from './asistencia.model';
import { AsistenciaModel } from './asistencia.model';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  BASE_URL = "http://localhost:9300"

  constructor(private http: HttpClient) { }

  obtenerAsistencias() {
    return this.http.get<AsistenciaListaModel[]>(this.BASE_URL+'/asistencia_listado');
  }

  obtenerAsistencia(id_registro_asis: string) {
    return this.http.get<AsistenciaModel[]>(`${this.BASE_URL}/asistencia_listado/${id_registro_asis}`)
  }

  agregarAsistencia(asistencia: AsistenciaModel) {
    return this.http.post<string>(`${this.BASE_URL}/asistencia_agregar`, asistencia);
  }

  actualizarAsistencia(asistencia: AsistenciaModel) {
    return this.http.put<string>(`${this.BASE_URL}/asistencia_edicion/${asistencia.id_registro_asis}`, asistencia)
  }

  eliminarAsistencia(id_registro_asis: string) {
    return this.http.delete<string>(`${this.BASE_URL}/asistencia_eliminacion/${id_registro_asis}`)
  }
}
