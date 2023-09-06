import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnuncioModel } from './anuncio.model';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  BASE_URL = "http://localhost:9300"

  constructor(private http: HttpClient) { }

  obtenerAnuncios() {
    return this.http.get<AnuncioModel[]>(this.BASE_URL+'/anuncios_listado');
  }

  obtenerAnuncio(id_anunc: string) {
    return this.http.get<AnuncioModel[]>(`${this.BASE_URL}/anuncios_listado/${id_anunc}`)
  }

  buscarImagen(img_anunc: string) {
    return this.http.get<string>(`${this.BASE_URL}/anuncios_imagenes/${img_anunc}`)
  }

  agregarImagen(formData: any) {
    return this.http.post<any>(`${this.BASE_URL}/anuncios_subir_img`, formData);
  }

  agregarAnuncio(anuncio: AnuncioModel) {
    return this.http.post<string>(`${this.BASE_URL}/anuncios_agregar`, anuncio);
  }

  actualizarAnuncio(anuncio: AnuncioModel) {
    return this.http.put<string>(`${this.BASE_URL}/anuncios_edicion/${anuncio.id_anunc}`, anuncio)
  }

  eliminarAnuncio(id_anunc: string) {
    return this.http.delete<string>(`${this.BASE_URL}/anuncios_eliminacion/${id_anunc}`)
  }
  
}
