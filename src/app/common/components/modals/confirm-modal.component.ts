// my-modal.component.ts

import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {CoreModule} from "../../../core/core.module";
import {DialogRef} from "@ngneat/dialog";

interface Data {
  title: string
}

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CoreModule,
  ],
  template: `
      <h1>{{title}}</h1>
      <button (click)="ref.close(true)"></button>
  `,
})
export class ConfirmModalComponent {
  ref: DialogRef<Data, boolean> = inject(DialogRef);

  get title() {
    if (!this.ref.data) return 'Hello world';
    return this.ref.data.title;
  }
}
