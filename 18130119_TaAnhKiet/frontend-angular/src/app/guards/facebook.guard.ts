import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilService } from '../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class FacebookGuard implements CanActivate {

  constructor(private router: Router,
    private utilService: UtilService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.utilService.getUserFromLocalStorage()
      ? this.router.navigateByUrl('/home')
      : this.router.navigateByUrl('/login')
  }

}
