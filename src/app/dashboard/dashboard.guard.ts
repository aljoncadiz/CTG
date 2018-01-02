import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(private user : UserService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    let userAccess = this.user.getCurrentUser().AccessLevel;
    debugger;
    if(userAccess == UserTypes.SuperUser){
      debugger;
    }
    return true;
  }
}
