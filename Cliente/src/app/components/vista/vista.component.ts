import { Component } from '@angular/core';
import { Provincia } from 'src/app/models/provinciaModel';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
})
export class VistaComponent {

  titulo:String ="Provincias y Capitales de Argentina";

  provincias:Provincia[];
  revelar:boolean=false;
  seleccionMult:any[] = [];

  constructor(private provinciasService: ProvinciasService,
    private router:Router) {
      this.provincias = [];
      console.log("Constructor");
  }

  procesar(): void {
    console.log("Uso de procesar");
    console.log("Capturando el formulario");

    let listaProvincias: Provincia[] = [];
    console.log("Uso de procesar");
    console.log("Capturando el formulario");

       //Por cada elemento de la seleccion buscamos uno a uno en el array de provincias
       this.seleccionMult.forEach(valorArray => {
        for(let i=0;i<this.provincias.length;i++){
          //si econtramos el id, ponemos el registro usuario en listaProvincias y pasamos al siguiente id
          if(valorArray==this.provincias[i].id){
            listaProvincias.push(this.provincias[i]);
            break;
          }
        }
      });
    //Corroboramos que se guardo en lista.	
      console.log(listaProvincias);
      this.provinciasService.guardarProvincias(listaProvincias);
      this.provinciasService.guardarProvinciasLocal();
      this.router.navigate(['provincias/listar']);
  }


  addRemoveItem($event:any):void{
    console.log("Capturando el checkbox");
    //Si checked es verdadero agregamos un item al array seleccionMult. Sino, remover 
    if($event.target.checked){
      //push agrega un nuevo elemento al array
      this.seleccionMult.push($event.target.value);
    }
    else{
      //splice quita elementos del array. Recibe splice(inicio, cuantos)
      //indexOf devuelve la posicion en el array del valor pasado por parametro
      this.seleccionMult.splice(this.seleccionMult.indexOf($event.target.value),1);
    }
	//el metodo sort mantiene el orden del array. Es conveniente porque las acciones del usuario no lo son
    this.seleccionMult.sort();
    console.log(this.seleccionMult);  
  }

  ngOnInit(): void {
    this.provinciasService.listarProvincias().subscribe(
      (res: any) => {
        console.log(res);
        this.provincias = (res);
        console.log(this.provincias);
      }
    );
  }
}
