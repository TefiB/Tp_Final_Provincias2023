import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VistaComponent } from './components/vista/vista.component';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component';
import { ProvinciasListarComponent } from './components/provincias-listar/provincias-listar.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { ProvinciasService } from './services/provincias.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {TokenInterceptorService} from './services/token-interceptor.service';
import { AlpieComponent } from './components/alpie/alpie.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    VistaComponent,
    UsuariosPrincipalComponent,
    UsuariosHomeComponent,
    ProvinciasListarComponent,
    UsuariosIngresarComponent,
    AlpieComponent,
    UsuariosRegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProvinciasService,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
