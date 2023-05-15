import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {DummyApiService} from "../dummy-api.service";
import {LoginDto} from "./auth.interface";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private dummyApi: DummyApiService
  ) {
  }

  login(data: LoginDto): Observable<any> {
    return this.dummyApi.login(data).pipe(
      map(res => res.token),
      tap(token => {
        return localStorage.setItem('authToken', token)
      }),
      catchError(err => {
        console.error('Failed to log in:', err);
        return of(null);
      })
    );
  }

  logout() {
    localStorage.removeItem('authToken');
  }

  get isLoggedIn() {
    return !!localStorage.getItem('authToken');
  }
}
