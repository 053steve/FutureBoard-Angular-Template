import {Component, inject, OnInit, ViewContainerRef} from '@angular/core';
import {CoreModule} from "../core/core.module";
import {Store} from "@ngrx/store";
import {hideAlert, showAlert} from "../common/components/alert/alert.action";
import {ALERT_STATUS} from "../common/components/alert/alert.component";
import { DialogService } from '@ngneat/dialog';
import {ConfirmModalComponent} from "../common/components/modals/confirm-modal.component";
import {logout} from "../common/services/auth/auth.action";


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

  private dialog = inject(DialogService);


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
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      data: {
        title: 'something',
      },
    });
  }

  logout() {
    this.store.dispatch(logout())
  }
}
