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
    return this.http.get<AnuncioModel[]>(this.BASE_URL+'/anuncios');
  }
  
}
