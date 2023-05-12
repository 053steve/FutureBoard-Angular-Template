import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SharedModule} from "./common/modules/shared.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    SharedModule
  ]
})


export class AppComponent {
  title = 'futureboard-ng-boilerplate';
}
