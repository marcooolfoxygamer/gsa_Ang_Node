import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel } from '../shared/service-usuario/usuario.model';
import { UsuarioService } from '../shared/service-usuario/usuario.service';

@Component({
  selector: 'app-recuperacion-contrasena',
  templateUrl: './recuperacion-contrasena.component.html',
  styleUrls: ['./recuperacion-contrasena.component.css']
})
export class RecuperacionContrasenaComponent implements OnInit {

  usuario = new UsuarioModel("","","","","","","","","","","","");

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  subm:boolean = false

  ngOnInit() {
  }

  onSubmit_first(){

    if (this.usuario.correo_sena_user == '') {
      alert("Por favor, digite el correo electrónico de la cuenta");
    }
    else if (this.usuario.id_user == '') {
      alert("Por favor, digite su número de identificación");
    }
    else {
      this.usuarioService.validar_rec_contrasena(this.usuario).subscribe(data => {
        if (data == 'Se encontró'){
          this.subm = true
        }
        else {
          alert(data)
        }
      })
    }
  }

  onSubmit_sec(){
    this.usuarioService.actualizarContrasena(this.usuario).subscribe(data => {
      alert(data)
      this.router.navigate(['../iniciar_sesion'])
    })
  }
}
