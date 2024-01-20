import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Provincia } from "src/app/models/provinciaModel";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProvinciasService {
    API_URI = 'http://localhost:3000/provincia';
    provincias: Provincia[];

    constructor(private http: HttpClient) {

        this.provincias = [

            {
                "id": "0",
                "nombre": "Ciudad Autonoma de Buenos Aires",
                "capital": "",
                "descripcion": "",
                "imagen": "./assets/img/CABA.png"
            },
            {
                "id": "1",
                "nombre": "Buenos Aires",
                "capital": "La Plata",
                "descripcion": "",
                "imagen": "./assets/img/Provincia de BSAS.png"
            },
            {
                "id": "2",
                "nombre": "Catamarca",
                "capital": "San Fernando del Valle de Catamarca",
                "descripcion": "Ubicada en el noroeste del país, es conocida por su paisaje montañoso y su riqueza en recursos minerales. Tiene un fuerte legado histórico y cultural, con numerosos sitios arqueológicos y manifestaciones de arte rupestre.",
                "imagen": "./assets/img/Catamarca.png"
            },
            {
                "id": "3",
                "nombre": "Chaco",
                "capital": "Resistencia",
                "descripcion": "Situada en la región norte del país, es una provincia predominantemente rural y cuenta con una gran cantidad de bosques y áreas naturales protegidas. Su cultura está influenciada por las comunidades indígenas que habitan la región.",
                "imagen": "./assets/img/Chaco.png"
            },
            {
                "id": "4",
                "nombre": "Chubut",
                "capital": "Rawson",
                "descripcion": "Esta provincia, ubicada en la Patagonia, se caracteriza por su impresionante paisaje costero y montañoso. Es conocida por la Península Valdés, un importante sitio de avistamiento de ballenas y otras especies marinas.",
                "imagen": "./assets/img/Chubut.png"
            },
            {
                "id": "5",
                "nombre": "Cordoba",
                "capital": "Cordoba",
                "descripcion": "En el centro del país, Córdoba es una provincia conocida por su belleza natural y su legado colonial. Posee paisajes serranos, ríos y una variada oferta turística. Además, alberga importantes universidades y una animada vida cultural.",
                "imagen": "./assets/img/Cordoba.png"
            },
            {
                "id": "6",
                "nombre": "Corrientes",
                "capital": "Corrientes",
                "descripcion": "Ubicada en la región noroeste del país, Corrientes es una provincia atravesada por los ríos Paraná y Uruguay. Se destaca por sus hermosos paisajes fluviales, sus playas y su carnaval, uno de los más destacados de Argentina.",
                "imagen": "./assets/img/Corrientes.png"
            },
            {
                "id": "7",
                "nombre": "Entre Rios",
                "capital": "Parana",
                "descripcion": "Situada en el litoral del país, Entre Ríos está bañada por el río Paraná y el río Uruguay. Es reconocida por sus extensas playas y su rica agricultura. La ciudad de Paraná es la capital de la provincia.",
                "imagen": "./assets/img/Entre Rios.png"
            },
            {
                "id": "8",
                "nombre": "Formosa",
                "capital": "Formosa",
                "descripcion": "En el extremo norte del país, Formosa es una provincia que cuenta con una gran biodiversidad y vastas áreas naturales protegidas. Tiene una fuerte presencia de comunidades indígenas y se destaca por su riqueza cultural.",
                "imagen": "./assets/img/Formosa.png"
            },
            {
                "id": "9",
                "nombre": "Jujuy",
                "capital": "San Salvador de Jujuy",
                "descripcion": "Ubicada en el noroeste de Argentina, Jujuy es conocida por su paisaje montañoso y su cultura andina. La Quebrada de Humahuaca, declarada Patrimonio de la Humanidad, es uno de los principales atractivos turísticos de la provincia.",
                "imagen": "./assets/img/Jujuy.png"
            },
            {
                "id": "10",
                "nombre": "La Pampa",
                "capital": "Santa Rosa",
                "descripcion": "Situada en el centro del país, La Pampa es una provincia mayoritariamente agrícola y ganadera. Su paisaje está dominado por extensas llanuras y se considera una de las regiones más importantes en la producción de carne.",
                "imagen": "./assets/img/La Pampa.png"
            }
        ];
    }

    listarProvincias() {
        //para expandir/especializar las variables usamos ` y no ' o "
        //Las variables salen pintadas de otro color diferente del de texto
        return this.http.get(`${this.API_URI}/list`);
        //si no funciona usar 
        //return this.http.get(this.API_URI+'/list');
        //return this.provincias;
    }

    buscarProvincia(id: string) {
        return this.http.get(`${this.API_URI}/find/${id}`);
    }

    guardarProvincia(provincia: Provincia) {
        return this.http.post(`${this.API_URI}/add`, provincia);
    }

    actualizarProvincia(id: string, actualizaProvincia: Provincia) {
        return this.http.put(`${this.API_URI}/update/${id}`, actualizaProvincia);
    }

    eliminarProvincia(id: string) {
        return this.http.delete(`${this.API_URI}/delete/${id}`);
    }


    guardarProvincias(ProvinciasGuardar: Provincia[]) {
        //Recibe un array de provincias y lo guarda. Sobreescribe el contenido previo.
        this.provincias = ProvinciasGuardar;
        //console.log(this.usuarios);
    }

    guardarProvinciasLocal() {
        //Guarda las provincias del objeto en el LocalStorage
        localStorage.setItem("Provincias", JSON.stringify(this.provincias));
    }

    cargarProvinciasLocal() {
        //Carga las provincias desde el objeto en el LocalStorage
        this.provincias = JSON.parse(localStorage.getItem("Provincias") || '{}');
    }

    setToken() {
        //localStorage.setItem('token',result.token);
        localStorage.setItem('token', 'LogInOK');
    }

    isLoggedIn(): Boolean {
        return !!localStorage.getItem('token'); //Si existe token retorna true
        //es el equivalente de testearlo con if pero ahora en una sola linea.
    }

    logOut() {
        localStorage.removeItem('token');
    }
}