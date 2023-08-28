import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
// import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
// import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { UsuarioService } from './shared/usuario.service';
import { NavbarLogAdminComponent } from './shared/navbar-log-admin/navbar-log-admin.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { AnunciosComponent } from './home/anuncios/anuncios.component';
import { RecomendacionesComponent } from './home/recomendaciones/recomendaciones.component';
import { RegistrarseComponent } from './home/registrarse/registrarse.component';
import { IniciarSesionComponent } from './home/iniciar-sesion/iniciar-sesion.component';
import { BienvenidaComponent } from './admin/bienvenida/bienvenida.component';
import { ListadoComponent } from './admin/usuarios/listado/listado.component';
import { EdicionComponent } from './admin/usuarios/edicion/edicion.component';
import { NavbarGeneralComponent } from './shared/navbar-general/navbar-general.component';



@NgModule({
  declarations: [
    AppComponent,
    // ListaUsuariosComponent,
    // EditarUsuarioComponent,
    // AgregarUsuarioComponent,
    NavbarLogAdminComponent,
    FooterComponent,
    InicioComponent,
    AnunciosComponent,
    RecomendacionesComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    BienvenidaComponent,
    ListadoComponent,
    EdicionComponent,
    NavbarGeneralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash:true }),
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
