import { Component } from '@angular/core';
import {CoreModule} from "../core/core.module";
import {Store} from "@ngrx/store";
import {hideAlert, showAlert} from "../common/components/alert/alert.action";


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

  constructor(
    private store: Store<any>,
  ) {
  }

  showAlert() {
    this.store.dispatch(showAlert({alertType: 'some-alert-type', text: 'alert text example'}));
  }

  hideAlert() {
    this.store.dispatch(hideAlert());
  }
}
