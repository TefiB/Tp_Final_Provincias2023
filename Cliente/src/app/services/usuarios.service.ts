import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuarioModel';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {
    API_URI = 'http://localhost:3000/user';
    usuarios: Usuario[];

    constructor(private http: HttpClient) {

        this.usuarios = [];
    }

    listarUsuarios() {
        //para expandir/especializar las variables usamos ` y no ' o "
        //Las variables salen pintadas de otro color diferente del de texto
        return this.http.get(`${this.API_URI}/list`);
        //si no funciona usar 
        //return this.http.get(this.API_URI+'/list');
        //return this.usuarios;
    }

    buscarUsuario(id: string) {
        return this.http.get(`${this.API_URI}/find/${id}`);
    }

    guardarUsuario(usuario: Usuario) {
        return this.http.post(`${this.API_URI}/add`, usuario);
    }

    actualizarUsuario(id: string, actualizaUsuario: Usuario) {
        return this.http.put(`${this.API_URI}/update/${id}`, actualizaUsuario);
    }

    eleminarUsuario(id: string) {
        return this.http.delete(`${this.API_URI}/delete/${id}`);
    }

    loginUsuario(usuario:Usuario){
        return this.http.post(`${this.API_URI}/signin/`,usuario);
      }

    guardarUsuarios(UsuariosGuardar: Usuario[]) {
        //Recibe un array de usuarios y lo guarda. Sobreescribe el contenido previo.
        this.usuarios = UsuariosGuardar;
        //console.log(this.usuarios);
    }

    guardarUsuariosLocal() {
        //Guarda las usuarios del objeto en el LocalStorage
        localStorage.setItem("Usuarios", JSON.stringify(this.usuarios));
    }

    cargarUsuariosLocal() {
        //Carga las usuarios desde el objeto en el LocalStorage
        this.usuarios = JSON.parse(localStorage.getItem("Usuarios") || '{}');
    }

    /*setToken() {
        //localStorage.setItem('token',result.token);
        localStorage.setItem('token', 'LogInOK');
    }*/

    setToken(token:string){
		localStorage.setItem('token',token);
	}

    getToken() {//Obtenemos el token que despues enviara el interceptor x cada req
        return localStorage.getItem('token');
    }

    isLoggedIn(): Boolean {
        return !!localStorage.getItem('token'); //Si existe token retorna true
        //es el equivalente de testearlo con if pero ahora en una sola linea.
    }

    logOut() {
        localStorage.removeItem('token');
    }

    registrar(usuario:any){
		return this.http.post(`${this.API_URI}/signup`,usuario);
	}

}