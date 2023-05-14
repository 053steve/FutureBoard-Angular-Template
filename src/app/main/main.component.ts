import { Component } from '@angular/core';
import {SharedModule} from "../common/modules/shared.module";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
