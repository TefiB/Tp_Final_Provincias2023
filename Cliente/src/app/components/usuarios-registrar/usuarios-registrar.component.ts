import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-usuarios-registrar',
  templateUrl: './usuarios-registrar.component.html',
  styleUrls: ['./usuarios-registrar.component.css']
})
export class UsuariosRegistrarComponent {

  user = { nombre: "", email: "", password: "", repassword: "", rol: "" };
  errorNombre = 0;
  errrorPassword = 0;
  errorRePassrword = 0;
  errorEmail = 0;
  errorRol = 0;
  mensaje: any = "";
  reintentar: boolean = false;

  constructor(public authService: AuthService, private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  registrar() {
    console.log("Sign Up");
    console.log(this.user)
    this.usuariosService.registrar(this.user).subscribe(
      res => {
        let result: any = res; /*Casteamos a una variable local para que no de error
        al preguntar por sus atributos o propiedades del objeto res*/
        console.log(res, result);
        switch (result.save) {
          case "ok":
            console.log(result.mensaje);
            //this.usuariosService.setToken(res.token);
            this.router.navigate(['usuarios/home']);
            break;
          case "invalido":
            console.log(result.mensaje);
            this.mensaje = result.mensaje;
            this.reintentar = true;
            break;
          default:
            console.log("Error en el switch");
        }
      },
      err => {
        console.log(err.error.message);
      }
    )
  }

  recargarForm() {
    this.user.nombre = "";
    this.errorNombre = 0;
    this.user.password = "";
    this.errrorPassword = 0;
    this.user.repassword = "";
    this.errorRePassrword = 0;
    this.user.email = "";
    this.errorEmail = 0;
    this.reintentar = false;
    this.user.rol = "";
    this.errorRol = 0;
  }

  verificarForm(): boolean {
    this.errorNombre = this.verificarNombre(this.user.nombre);
    this.errrorPassword = this.verificarPassword(this.user.password);
    this.errorRePassrword = this.verificarRePassword(this.user.password, this.user.repassword);
    this.errorEmail = this.verificarEmail(this.user.email);
    this.errorRol = this.verificarRol(this.user.rol);
    if ((this.errorNombre + this.errrorPassword + this.errorRePassrword + this.errorEmail + this.errorRol) > 0) {
      return false;
    }
    return true;
  }

  private verificarNombre(nombre: string): number {
    const patron = /^[a-zA-Z]+$/;
    if (nombre.length == 0)
      return 1;
    if (nombre.length > 20)
      return 2;
    if (!patron.test(nombre))
      return 3;
    return 0;
  }

  private verificarPassword(password: any): number {
    const patron = /^[A-Za-z0-9]{6,}$/;
    if (password.length == 0)
      return 1;
    if (password.length > 20)
      return 2;
    if (!patron.test(password))
      return 3;
    return 0;
  }

  private verificarRePassword(password: any, repassword: any): number {
    if (password != repassword) {
      return 1;
    }
    return 0;
  }

  private verificarEmail(email: any): number {
    const patron = /^[a-z0-9]{1,10}@[a-z0-9]{1,10}.[a-z]{2,3}$/;
    if (email.length == 0)
      return 1;
    if (email.length > 20)
      return 2;
    if (!patron.test(email))
      return 3;
    return 0;
  }

  private verificarRol(rol: any): number {
    const patron = /^user$|^admin$/g; //exactamente user o admin
    if (patron === undefined)
      return 2;
    if (!patron.test(rol))
      return 1;
    return 0;
  }

  limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.user.nombre = "";
      this.errorNombre = 0;
    }
  }

  limpiarPassword() {
    if (this.errrorPassword > 0) {
      console.log("Limpiar password");
      this.user.password = "";
      this.errrorPassword = 0;
    }
  }

  limpiarRePassword() {
    if (this.errorRePassrword > 0) {
      console.log("Limpiar repassword");
      this.user.repassword = "";
      this.errorRePassrword = 0;
    }

  }

  limpiarEmail() {
    if (this.errorEmail > 0) {
      console.log("Limpiar email");
      this.user.email = "";
      this.errorEmail = 0;
    }
  }

  limpiarRol() {
    if (this.errorRol > 0) {
      console.log("Limpiar rol");
      this.user.rol = "";
      this.errorRol = 0;
    }

  }
}