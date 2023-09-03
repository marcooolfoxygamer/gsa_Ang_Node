import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/shared/service-usuario/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel } from 'src/app/shared/service-usuario/usuario.model';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  usuario = new UsuarioModel("","","","","","","","","","","","");

  constructor(
    private usuarioService: UsuarioService,
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
        // this.router.navigate(['../iniciar_sesion'])
        // this.router.navigate(['../inicio'])
      }
      else {
        this.usuarioService.obtenerRol(this.usuario).subscribe(data => {
          if (data == '1') {
            this.router.navigate(['../admin'])
          }
          if (data == '2') {
            this.router.navigate(['../aprendiz'])
          }
          if (data == '3') {
            this.router.navigate(['../instructor'])
          }
        })
      }

    })

  }

}
