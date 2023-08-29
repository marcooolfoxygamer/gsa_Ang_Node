import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { RegistrarseComponent } from './home/registrarse/registrarse.component';
import { IniciarSesionComponent } from './home/iniciar-sesion/iniciar-sesion.component';
import { BienvenidaAdminComponent } from './admin/bienvenida-admin/bienvenida-admin.component';
import { ListadoComponent } from './admin/usuarios/listado/listado.component';
import { EdicionComponent } from './admin/usuarios/edicion/edicion.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'iniciar_sesion', component: IniciarSesionComponent },
  { path: 'admin', component: BienvenidaAdminComponent },
  { path: 'usuarios_listado', component: ListadoComponent },
  { path: 'usuarios_edicion/:id_user', component: EdicionComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
