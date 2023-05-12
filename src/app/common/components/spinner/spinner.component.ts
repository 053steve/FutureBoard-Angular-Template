import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { showSpinner, hideSpinner } from './spinner.actions';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-overlay" *ngIf="showSpinner$ | async">
      <div class="spinner-container">
        <div class="spinner"></div>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  showSpinner$: Observable<boolean>;

  constructor(private store: Store<{ spinner: boolean }>) {}

  ngOnInit() {
    this.showSpinner$ = this.store.select('spinner');
  }
}
