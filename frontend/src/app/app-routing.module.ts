import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './admin/usuarios/listado/listado.component';
import { EdicionComponent } from './admin/usuarios/edicion/edicion.component';
import { RegistrarseComponent } from './home/registrarse/registrarse.component';
import { InicioComponent } from './home/inicio/inicio.component';
// import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
// import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
// import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

export const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'admin/usuarios/listado', component: ListadoComponent },
  { path: 'admin/usuarios/edicion/:id_user', component: EdicionComponent },
  // { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'home/registrarse', component: RegistrarseComponent },
  // { path: 'usuarios/editar/:id_user', component: EditarUsuarioComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
