import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { ProvinciasService } from './services/provincias.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: ProvinciasService,
    private router: Router
  ) { }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['usuarios/ingresar']);
    return false;
  }

}