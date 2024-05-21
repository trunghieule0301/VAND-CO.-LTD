import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef, EmbeddedViewRef, ComponentRef, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupComponentRef!: ComponentRef<any>;

  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) {}

  open(component: Type<any>, data?: any) {
    // Create component
    const factory = this.resolver.resolveComponentFactory(component);
    this.popupComponentRef = factory.create(this.injector);

    // Pass data to the component if any
    if (data) {
      Object.assign(this.popupComponentRef.instance, data);
    }

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.popupComponentRef.hostView);

    // Get DOM element from component
    const domElem = (this.popupComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);
  }

  close() {
    // Detach and destroy component
    this.appRef.detachView(this.popupComponentRef.hostView);
    this.popupComponentRef.destroy();
  }
}
