import { Component } from '@angular/core';
import {CoreModule} from "../core/core.module";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CoreModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
