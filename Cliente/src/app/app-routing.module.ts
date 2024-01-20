import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from "./components/vista/vista.component";
import { UsuariosPrincipalComponent } from "./components/usuarios-principal/usuarios-principal.component";
import { UsuariosHomeComponent } from "./components/usuarios-home/usuarios-home.component";
import { ProvinciasListarComponent } from './components/provincias-listar/provincias-listar.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import {AuthGuard} from './auth.guard';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'usuarios/principal',
		pathMatch: 'full'
	},
	{
		path: 'usuarios/vista',
		component: VistaComponent
	},
	{
		path: 'usuarios/principal',
		component: UsuariosPrincipalComponent
	},
	{
		path: 'usuarios/home',
		component: UsuariosHomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'provincias/listar',
		component: ProvinciasListarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'usuarios/ingresar',
		component: UsuariosIngresarComponent
	},
	{
		path: 'usuarios/registrar',
		component: UsuariosRegistrarComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
