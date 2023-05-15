import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {CoreModule} from "../core/core.module";
import {login} from "../common/services/auth/auth.action";

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

  username = 'sberminghamh';
  password = 'cAjfb8vg';

  constructor(
    private store: Store<any>,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(login({username: this.username, password: this.password}))
  }
}
