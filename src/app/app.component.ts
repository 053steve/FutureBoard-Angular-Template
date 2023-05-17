import { Component } from '@angular/core';
import {CoreComponent} from "./core/core.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ...CoreComponent
  ]
})


export class AppComponent {
  title = 'futureboard-ng-boilerplate';
}
