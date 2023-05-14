import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showSpinner, hideSpinner } from '../common/components/spinner/spinner.action';
import {CoreModule} from "../core/core.module";
import {SpinnerState} from "../common/components/spinner/spinner.interface";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CoreModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private store: Store<any>
  ) {
  }

  ngOnInit() {
    console.log(this.store)
  }

  onLoad() {
    this.store.dispatch(showSpinner())
  }

  stopLoad() {
    this.store.dispatch(hideSpinner())
  }
}
