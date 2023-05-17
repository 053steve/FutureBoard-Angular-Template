import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {CoreModule} from "../core/core.module";
import {Store} from "@ngrx/store";
import {hideAlert, showAlert} from "../common/components/alert/alert.action";
import {ALERT_STATUS} from "../common/components/alert/alert.component";


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CoreModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit() {


  }

  showAlert() {
    this.store.dispatch(showAlert({alertType: ALERT_STATUS.SUCCESS, text: 'alert text example'}));
  }

  hideAlert() {
    this.store.dispatch(hideAlert());
  }

  showModal() {

  }
}
