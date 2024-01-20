import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isLoggedIn: boolean = false;

  ingresar() {
    this.isLoggedIn = true;
  }
  

  /*logout() {
    this.isLoggedIn = false;
    console.log("Cerrando sesion!!!");
    localStorage.removeItem('token');
    this.router.navigate(['usuarios/principal']);
  }*/

  /*getCurrentUser() {
    return { rol: "usuario" };
  }*/

  /*esAdmin() {
    const currentUser = this.getCurrentUser();
    console.log('Rol del usuario:', currentUser.rol);
    return currentUser && currentUser.rol === 'admin';
  }*/
}