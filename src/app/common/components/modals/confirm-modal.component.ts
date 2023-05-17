// my-modal.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import {CoreModule} from "../../../core/core.module";

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [
    CoreModule
  ],
  template: `
    <div class="modal-content">
      <!-- Modal content goes here -->
      <h1>My Modal</h1>
      <button (click)="onClose()">Close Modal</button>
    </div>
  `,
})
export class ConfirmModalComponent {
  @Output() someOutput = new EventEmitter<any>();

  onClose(): void {
    this.someOutput.emit('Some data from the modal');
  }
}
