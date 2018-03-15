
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServiceOneService} from './service-one.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public service:ServiceOneService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
      console.log("Retuening"+this.service.getActive());
  //    this.rou.navigate(['/']);
    return this.service.getActive();
  }
}
