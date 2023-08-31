import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './shared/service-usuario/usuario.service';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { AnunciosComponent } from './home/anuncios/anuncios.component';
import { RecomendacionesComponent } from './home/recomendaciones/recomendaciones.component';
import { RegistrarseComponent } from './home/registrarse/registrarse.component';
import { IniciarSesionComponent } from './home/iniciar-sesion/iniciar-sesion.component';
import { BienvenidaAdminComponent } from './admin/bienvenida-admin/bienvenida-admin.component';
import { ListadoComponent } from './admin/usuarios/listado/listado.component';
import { EdicionComponent } from './admin/usuarios/edicion/edicion.component';
import { NavbarGeneralComponent } from './shared/navbar-general/navbar-general.component';
import { BienvenidaAprendizComponent } from './aprendiz/bienvenida-aprendiz/bienvenida-aprendiz.component';
import { PlanificadorComponent } from './aprendiz/planificador/planificador.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    AnunciosComponent,
    RecomendacionesComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    BienvenidaAdminComponent,
    ListadoComponent,
    EdicionComponent,
    NavbarGeneralComponent,
    BienvenidaAprendizComponent,
    PlanificadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
