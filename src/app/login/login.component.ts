import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {SharedModule} from "../common/modules/shared.module";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule,

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

}
