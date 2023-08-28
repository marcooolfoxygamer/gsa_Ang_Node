import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Observable<UsuarioModel[]> | undefined;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
      this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  // borrarUsuario(id_user: string) {
  //   this.usuarioService.borrarUsuario(id_user).subscribe(data => {
  //     alert('Usuario eliminado con éxito');
  //   })
  //   this.usuarios = this.usuarioService.obtenerUsuarios()
  // }

}

