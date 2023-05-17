// this file is to import all common stand-alone components
import {SpinnerComponent} from "../common/components/spinner/spinner.component";
import {RouterModule} from "@angular/router";
import {AlertComponent} from "../common/components/alert/alert.component";


export const CoreComponent = [
  SpinnerComponent,
  RouterModule,
  AlertComponent
];