import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {CommonModule} from "@angular/common";
import {isLoadingSelector} from "./spinner.selector";
import {AppState} from "../../../app.state.interface";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
      <ng-container *ngIf="showSpinner$ | async as showSpinner">
          <div class="spinner-overlay" *ngIf="showSpinner">
              <div class="spinner-container">
                  <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
              </div>
          </div>
      </ng-container>
  `,

})
export class SpinnerComponent implements OnInit {
  showSpinner$: Observable<boolean> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.showSpinner$ = this.store.select(isLoadingSelector);
  }
}
