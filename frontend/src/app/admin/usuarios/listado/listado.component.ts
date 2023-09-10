import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/shared/service-usuario/usuario.model';
import { UsuarioService } from 'src/app/shared/service-usuario/usuario.service';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios: Observable<UsuarioModel[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
    protected sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {
    let rol = this.sessionStorageService.get('rol')

    if (rol != '1') {
      this.sessionStorageService.clear()
    } 
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

}
