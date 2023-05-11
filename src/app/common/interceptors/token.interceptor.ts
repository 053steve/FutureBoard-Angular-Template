import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, empty, from, throwError } from 'rxjs';
import { tap, switchMap, map, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private token = null;

    constructor(
        private router: Router,
        // private authService: AuthService
    ) { }

    logout() {
        //TODO: once auth service is done, comment this out
        // this.authService.logout();
        this.router.navigate(['login']);
        return empty();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('working');

       //TODO: once auth service is done, comment this out
       // return from(this.authService.getToken()).pipe(switchMap(token => {
       //      if (token && token !== '') {
       //          const headers = req.headers
       //              .set('Authorization', 'Bearer ' + token);
       //          const requestClone = req.clone({headers});
       //          return next.handle(requestClone).pipe(tap(
       //              succ => {}, // If Token is still alright then do nothing
       //              err => {
       //                  if (err.status === 401 || err.status === 403) {
       //                      this.logout();
       //                  }
       //              }
       //          ));
       //      }
       //  }));

       return next.handle(req);
    }

    // generalErrorHandler(error: any, caught: Observable<any>): Observable<any> {
    //     console.log('error caught: ', error);
    //     if( error.error.status == "INVALID_TOKEN" || error.error.status == "MAX_TOKEN_ISSUE_REACHED"){
    //       console.log('token has expired');
    //       this.logout();
    //       return error;
    //     }
    //     return error;
    //   }
}
