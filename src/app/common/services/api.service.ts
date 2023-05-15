import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { AlertService } from './alert.service';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = 'https://dummyjson.com';
  directHttp: HttpClient;

  constructor(
    public http: HttpClient,
    private handler: HttpBackend,
    // private alertservice: AlertService,
    private router: Router

  ) {
    this.directHttp = new HttpClient(this.handler);
  }



  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params && params.single) {
      endpoint = endpoint + params.value;
    } else {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

  directGet(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params && params.single) {
      endpoint = endpoint + params.value;
    } else {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params.hasOwnProperty(k)) {
          reqOpts.params = reqOpts.params.set(k, params[k]);
        }
      }
    }

    return this.directHttp.get(this.url + '/' + endpoint, reqOpts);
  }

  directPost(endpoint: string, body: any, reqOpts?: any) {
    return this.directHttp.post(this.url + '/' + endpoint, body, { observe: 'response' });
  }

  async shorErrowMessage(err: any) {
    let text;
    if (err) {
      if(err === 'User not found') {
        text = 'User not found';
      } else {
        text = 'Something went wrong!s';
      }
    // this.alertservice.error(text);
      // if (err.error.name === 'NoAuthorization' ||
      //     (err.status === 422 && err.name === 'NoAuthorization') ||
      //     err.error.message === 'jwt expired') {
      //   await sessionStorage.removeItem('token');
      //   await sessionStorage.removeItem('user');
      //   this.router.navigateByUrl('login');
      // } else {
      //   let text;
      //   if (err.error.name === 'WinLossDuplicateUserFound') {
      //     text = 'ในรายการมีผู้ใช้ซ้ำเกินกว่าหนึ่ง กรุณาตรวจสอบอีกครั้ง';
      //   } else {
      //     text = 'พบข้อผิดพลาด กรุณาลองใหม่อีกครั้ง';
      //   }
      //  this.alertservice.error(text);
      // }
    }
  }
}
