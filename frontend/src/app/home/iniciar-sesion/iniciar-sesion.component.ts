import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/shared/service-usuario/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/service-usuario/usuario.model';
import { SessionStorageService } from 'src/app/shared/service-session_storage/session-storage.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  usuario = new UsuarioModel("","","","","","","","","","","","");

  constructor(
    private usuarioService: UsuarioService,
    private sessionStorageService: SessionStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit');

    this.usuarioService.iniciarSesion(this.usuario).subscribe(data => {
      if (data == 'El correo o la contraseña es incorrecta. Por favor, inténtelo de nuevo') {
        alert(data)
      }
      else {
        this.usuarioService.obtenerRol_Id(this.usuario).subscribe(data => {
          let dato:any = data[0]
          let rol = dato['fk_tipo_user']
          let id = dato['id_user']
          if (rol == '1') {
            this.sessionStorageService.set('rol',rol)
            this.sessionStorageService.set('id_user',id)
            this.router.navigate(['../admin'])
          }
          else if (rol == '2') {
            this.sessionStorageService.set('rol',rol)
            this.sessionStorageService.set('id_user',id)
            this.router.navigate(['../aprendiz'])
          }
          else if (rol == '3') {
            this.sessionStorageService.set('rol',rol)
            this.sessionStorageService.set('id_user',id)
            this.router.navigate(['../instructor'])
          } else {
            this.sessionStorageService.clear()
          }
        })
      }

    })

  }

  getSession(session:any) {
    return sessionStorage.getItem(session)
  }

}
