import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/shared/service-usuario/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel, Antecedentes } from 'src/app/shared/service-usuario/usuario.model';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  usuario = new UsuarioModel("","","","","","","","","","","","");
  antecedentes: Observable<Antecedentes[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.antecedentes = this.usuarioService.obtenerAntecedentes();
  }

  onSubmit() {
    console.log('onSubmit');

    this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
      alert(data)
      this.router.navigate(['../iniciar_sesion'])
    })
  }
}
