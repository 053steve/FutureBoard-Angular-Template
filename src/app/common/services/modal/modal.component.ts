import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-overlay">
      <div class="modal-container" [ngClass]="{ 'small': size === 'small', 'medium': size === 'medium', 'large': size === 'large' }">
        <ng-container *ngComponentOutlet="contentComponent"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() contentComponent: any;
  @Input() size: 'small' | 'medium' | 'large';
}
