import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../shared/usuario.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UsuarioModel, TiposUsuarios, Antecedentes } from '../shared/usuario.model';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent {

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
      this.router.navigate(['/usuarios'])
    })
    
  }

}
