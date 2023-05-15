import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {LoginDto} from "./auth/auth.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(
    private apiService: ApiService
  ) {
  }

  login(data: LoginDto): Observable<any> {
    return this.apiService.post('auth/login', data);
  }


  getAllToDoList() {

  }
}
