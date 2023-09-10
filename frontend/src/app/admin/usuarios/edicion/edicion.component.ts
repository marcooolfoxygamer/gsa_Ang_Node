import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/shared/service-usuario/usuario.service';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel, TiposUsuarios, Antecedentes } from 'src/app/shared/service-usuario/usuario.model';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  id_user = ''
  usuario = new UsuarioModel("","","","","","","","","","","","");
  antecedentes: Observable<Antecedentes[]> | undefined;
  tiposusuarios: Observable<TiposUsuarios[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    protected sessionStorageService: SessionStorageService
  ) { }

  ngOnInit() {
    let rol = this.sessionStorageService.get('rol')

    if (rol != '1') {
      this.sessionStorageService.clear()
    }

    this.id_user = this.route.snapshot.params['id_user']

    this.usuarioService.obtenerUsuario(this.id_user).subscribe(data => {
      this.usuario = data[0]
    }, error => {
      console.log(error);
    })

    this.tiposusuarios = this.usuarioService.obtenerTiposUsuarios();
    this.antecedentes = this.usuarioService.obtenerAntecedentes();
  }

  onSubmit() {
    console.log('onSubmit');

    this.usuarioService.actualizarUsuario(this.usuario).subscribe(data => {
      alert(data)
      this.router.navigate(['../usuarios_listado'])
    })
  }
}
