import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {CommonModule} from "@angular/common";
import {alertStateSelector} from "./alert.selector";
import {AppState} from "../../../app.state.interface";
import {CoreModule} from "../../../core/core.module";
import {AlertState} from "./alert.interface";

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    CoreModule
  ],
  template: `
      <ng-container *ngIf="alertState$ | async as alertState">
          <div *ngIf="alertState.isShow" class="alert-container m-12 px-72 w-full absolute z-20">
              <div class="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200" role="alert">
                  {{alertState.text}}
              </div>
          </div>
      </ng-container>
  `,

})
export class AlertComponent implements OnInit {
  alertState$: Observable<AlertState> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.alertState$ = this.store.select(alertStateSelector);
  }
}
