import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators'
import {Store} from "@ngrx/store";
import {hideSpinner, showSpinner} from "../components/spinner/spinner.action";
import {Injectable} from "@angular/core";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private store: Store
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.store.dispatch(showSpinner());
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (err: any) => {
        this.store.dispatch(hideSpinner());
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect to the login route
            // or show a modal
          }
        }
    },()=> {
      return this.store.dispatch(hideSpinner());
    }));
  }
}