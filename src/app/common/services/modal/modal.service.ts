// modal.service.ts

import { Injectable, ComponentRef, ComponentFactoryResolver, ViewContainerRef, Injector } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalContainerRef: ViewContainerRef;
  private componentRefs: ComponentRef<ModalComponent>[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  setModalContainerRef(modalContainerRef: ViewContainerRef): void {
    this.modalContainerRef = modalContainerRef;
  }

  open(component: any, config: ModalConfig = {}): ComponentRef<ModalComponent> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = this.modalContainerRef.createComponent(componentFactory);
    componentRef.instance.contentComponent = component;
    componentRef.instance.size = config.size || 'medium';

    this.componentRefs.push(componentRef);

    return componentRef;
  }

  close(componentRef: ComponentRef<ModalComponent>): void {
    componentRef.destroy();
    this.componentRefs = this.componentRefs.filter((ref) => ref !== componentRef);
  }

  closeAll(): void {
    this.componentRefs.forEach((ref) => ref.destroy());
    this.componentRefs = [];
  }
}

export interface ModalConfig {
  size?: 'small' | 'medium' | 'large';
}
