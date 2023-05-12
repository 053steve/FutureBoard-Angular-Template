import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(
    public router: Router,
  ) { }

  async canActivate() {
    // TODO: Check token and permissions before entering page
    const isAuthenticated = true;

    if (!isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }

  }
}
