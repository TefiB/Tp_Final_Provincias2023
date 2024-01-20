import { Component } from '@angular/core';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor( private provinciasService: ProvinciasService, private router: Router) { }

  logout() {

    this.provinciasService.logOut();
    console.log("Cerrando sesion!!!");
    this.router.navigate(['usuarios/principal']);
  }

}
