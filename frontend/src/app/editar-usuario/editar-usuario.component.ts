import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel, TiposUsuarios, Antecedentes } from '../shared/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id_user = ''
  usuario = new UsuarioModel("","","","","","","","","","","","");
  antecedentes: Observable<Antecedentes[]> | undefined;
  tiposusuarios: Observable<TiposUsuarios[]> | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
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
      this.router.navigate(['/usuarios'])
    })
  }
}
