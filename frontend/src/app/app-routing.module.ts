import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { AnunciosComponent } from './home/anuncios/anuncios.component';
import { RecomendacionesComponent } from './home/recomendaciones/recomendaciones.component';
import { RegistrarseComponent } from './home/registrarse/registrarse.component';
import { IniciarSesionComponent } from './home/iniciar-sesion/iniciar-sesion.component';
import { BienvenidaAdminComponent } from './admin/bienvenida-admin/bienvenida-admin.component';
import { AgregarAnuncioComponent } from './admin/anuncios/agregar-anuncio/agregar-anuncio.component';
import { ListarAnuncioComponent } from './admin/anuncios/listar-anuncio/listar-anuncio.component';
import { EditarAnuncioComponent } from './admin/anuncios/editar-anuncio/editar-anuncio.component';
import { ListadoComponent } from './admin/usuarios/listado/listado.component';
import { EdicionComponent } from './admin/usuarios/edicion/edicion.component';
import { BienvenidaAprendizComponent } from './aprendiz/bienvenida-aprendiz/bienvenida-aprendiz.component';
import { PlanificadorComponent } from './aprendiz/planificador/planificador.component';
import { BienvenidaInstructorComponent } from './instructor/bienvenida-instructor/bienvenida-instructor.component';
import { AgregarAsistenciaComponent } from './instructor/asistencia/agregar-asistencia/agregar-asistencia.component';
import { ListarAsistenciaComponent } from './instructor/asistencia/listar-asistencia/listar-asistencia.component';
import { EditarAsistenciaComponent } from './instructor/asistencia/editar-asistencia/editar-asistencia.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'anuncios', component: AnunciosComponent },
  { path: 'recomendaciones', component: RecomendacionesComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'iniciar_sesion', component: IniciarSesionComponent },
  { path: 'admin', component: BienvenidaAdminComponent },
  { path: 'anuncios_agregar', component: AgregarAnuncioComponent },
  { path: 'anuncios_listado', component: ListarAnuncioComponent },
  { path: 'anuncios_edicion/id_anunc', component: EditarAnuncioComponent },
  { path: 'usuarios_listado', component: ListadoComponent },
  { path: 'usuarios_edicion/:id_user', component: EdicionComponent },
  { path: 'aprendiz', component: BienvenidaAprendizComponent },
  { path: 'planificador', component: PlanificadorComponent },
  { path: 'instructor', component: BienvenidaInstructorComponent },
  { path: 'asistencia_agregar', component: AgregarAsistenciaComponent },
  { path: 'asistencia_listado', component: ListarAsistenciaComponent },
  { path: 'asistencia_edicion/:id_registro_asis', component: EditarAsistenciaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
