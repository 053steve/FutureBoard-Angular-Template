import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SpinnerComponent} from "./common/components/spinner/spinner.component";
import { AlertComponent } from './common/components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    SpinnerComponent,
    RouterModule,
    AlertComponent
  ]
})


export class AppComponent {
  title = 'futureboard-ng-boilerplate';
}
