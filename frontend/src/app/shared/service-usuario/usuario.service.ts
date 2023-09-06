import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel, TiposUsuarios, Antecedentes } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = "http://localhost:9300"

  constructor(private http: HttpClient) { }

  obtenerTiposUsuarios() {
    return this.http.get<TiposUsuarios[]>(this.BASE_URL+'/tipos_usuarios');
  }

  obtenerAntecedentes() {
    return this.http.get<Antecedentes[]>(this.BASE_URL+'/antecedentes');
  }

  validarCorreo(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/validar_correo`, usuario)
  }

  validar_rec_contrasena(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/validar_rec_contrasena`, usuario)
  }

  actualizarContrasena(usuario: UsuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/validar_rec_contrasena/${usuario.id_user}`, usuario)
  }

  obtenerUsuarios() {
    return this.http.get<UsuarioModel[]>(this.BASE_URL+'/usuarios_listado');
  }

  obtenerUsuario(id_user: string) {
    return this.http.get<UsuarioModel[]>(`${this.BASE_URL}/usuarios_listado/${id_user}`)
  }

  agregarUsuario(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/registrarse`, usuario);
  }

  iniciarSesion(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/iniciar_sesion`, usuario)
  }

  obtenerRol(usuario: UsuarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/get_rol`, usuario)
  }

  actualizarUsuario(usuario: UsuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/usuarios_edicion/${usuario.id_user}`, usuario)
  }
}
