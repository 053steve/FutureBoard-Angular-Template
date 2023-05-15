import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { login, loginSuccess, loginFailure } from './auth.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {showSpinner, hideSpinner} from '../../components/spinner/spinner.action';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<any>,
    private router: Router,


  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({username, password}) => {
        return this.authService.login({username, password}).pipe(
          map(authToken => {
            return loginSuccess({authToken});
          }),
          catchError(error => {
            return of(loginFailure({error}));
          })
        )
      })
    )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccess),
      tap((action) => {
        return this.router.navigate(['/main']);
      })
    ),
    {dispatch: false}
  );

  loginFail$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginFailure),
        tap((action) => {
          // show some error
        })
      ),
    {dispatch: false}
  );
}
