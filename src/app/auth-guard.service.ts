import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { AuthService } from "./home/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router, private authService: AuthService) {}   

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated().
        then(
            (authenticated: boolean) => {
                if(authenticated){
                    return true;
                }else{
                    this.router.navigate(['/']);
                }
            }
        )
    }
}