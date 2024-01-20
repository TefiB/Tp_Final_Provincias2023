import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Provincia } from 'src/app/models/provinciaModel';

@Component({
  selector: 'app-provincias-listar',
  templateUrl: './provincias-listar.component.html',
  styleUrls: ['./provincias-listar.component.css']
})
export class ProvinciasListarComponent {
  provincias: Provincia[];
  id_select: string = "1";
  id_select_band: string = "1";
  indice: number = 0;
  indice_band: number = 0;
  nuevo: Provincia = {};
  
  //actual: Provincia = {};
  provinciaTemporal: Provincia = {};

  errorProvincia = 0;
  errorCapital = 0;
  OkActualizacion = 1;


  public imagenes = [
    { url: 'assets/img/CABA.png', nombre: 'CABA' },
    { url: 'assets/img/Catamarca.png', nombre: 'Catamarca' },
    { url: 'assets/img/Chaco.png', nombre: 'Chaco' },
    { url: 'assets/img/Chubut.png', nombre: 'Chubut' },
    { url: 'assets/img/Cordoba.png', nombre: 'Cordoba' },
    { url: 'assets/img/Corrientes.png', nombre: 'Corrientes' },
    { url: 'assets/img/Entre Rios.png', nombre: 'Entre Rios' },
    { url: 'assets/img/Formosa.png', nombre: 'Formosa' },
    { url: 'assets/img/Jujuy.png', nombre: 'Jujuy' },
    { url: 'assets/img/La Pampa.png', nombre: 'La Pampa' },
    { url: 'assets/img/La Rioja.png', nombre: 'La Rioja' },
    { url: 'assets/img/Mendoza.png', nombre: 'Mendoza' },
    { url: 'assets/img/Misiones.png', nombre: 'Misiones' },
    { url: 'assets/img/Neuquen.png', nombre: 'Neuquen' },
    { url: 'assets/img/Provincia de BSAS.png', nombre: 'Provincia de BSAS' },
    { url: 'assets/img/Rio Negro.png', nombre: 'Rio Negro' },
    { url: 'assets/img/Salta.png', nombre: 'Salta' },
    { url: 'assets/img/San Juan.png', nombre: 'San Juan' },
    { url: 'assets/img/San Luis.png', nombre: 'San Luis' },
    { url: 'assets/img/Santa Cruz.png', nombre: 'Santa Cruz' },
    { url: 'assets/img/Santa Fe.png', nombre: 'Santa Fe' },
    { url: 'assets/img/Santiago del Estero.png', nombre: 'Santiago del Estero' },
    { url: 'assets/img/Tierra Del Fuego.png', nombre: 'Tierra Del Fuego' },
    { url: 'assets/img/Tucuman.png', nombre: 'Tucuman' },
  ];

  constructor(private provinciasService: ProvinciasService) {
    //this.provinciasService.cargarProvinciasLocal(); //forzamos el uso de la carga local a modo de prueba.
    //this.provincias = this.provinciasService.listarProvincias();
    this.provincias = [];
    console.log("Constructor");
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

  seleccionaValor($event: any) {
   this.provinciasService.buscarProvincia(this.id_select).subscribe(
      (res:any)=>{
        console.log(res);
        //console.log(res.httpErrorResponse.status);
        this.provinciaTemporal = res;
      }
    );
  }

  actualizar() {
    console.log("Elige: " + this.id_select);
    console.log(this.provincias);
    this.provinciasService.actualizarProvincia(this.id_select,this.provinciaTemporal).subscribe(
      (res:any)=>{
        console.log(res.text);
        this.ngOnInit();
      }
      
    );
  }

  seleccionaBand($event: any) {
    console.log("Elige: " + this.id_select_band)
    for (let i = 0; i < this.imagenes.length; i++) {
      if (this.id_select_band == this.imagenes[i].nombre) {
        this.indice_band = i;
        break;
      }
    }
    console.log(this.indice_band);
  }

  agregar() {
    console.log(this.nuevo);
    this.nuevo.imagen = "assets/img/" + this.nuevo.imagen + ".png";
    //this.nuevo.imagen = this.imagenes[this.indice_band].nombre;
    this.provinciasService.guardarProvincia(this.nuevo).subscribe(
      (res: any) => {
        console.log(res);
        //this.provincias.push(this.nuevo);
        this.ngOnInit();
        console.log(this.provincias);
        this.nuevo = {};
      });
  }

  eliminar($event: any) {
    console.log($event.target.value);
    let id: string = $event.target.value; //Guardamos el id del boton
    this.provinciasService.eliminarProvincia(id).subscribe(
      (res: any) => {
        this.ngOnInit();
        console.log(this.provincias);
      }
    );
  }

  validarCampos(): Boolean {
    console.log("Validando los campos del formulario!!!");
    this.errorProvincia = this.verificarProvincia(this.nuevo.nombre);
    this.errorCapital = this.verificarCapital(this.nuevo.capital);
    if ((this.errorProvincia + this.errorCapital) > 0) {
      return false;
    }
    this.OkActualizacion = 0;
    return true;
  }
  private verificarProvincia(provincia: any): number {
    const patron = /^[A-Z][A-z,a-z\s]+$/; //Primer caracter en mayuscular alternando luego
    if (provincia === undefined)
      return 1;
    if (provincia.length > 20)
      return 2;
    if (!patron.test(provincia))
      return 3;
    return 0;
  }

  private verificarCapital(capital: any): number {
    const patron = /^[A-Z][A-z,a-z\s]+$/; //Primer caracter en mayuscular alternando luego
    if (capital === undefined)
      return 1;
    if (capital.length > 40)
      return 2;
    if (!patron.test(capital))
      return 3;
    return 0;
  }
}
