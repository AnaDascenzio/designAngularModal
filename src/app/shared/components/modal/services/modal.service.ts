import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import { ModalConfig } from '../interfaces/modal-config';
import { ModalComponent } from '../modal.component';
import { BodyInjectorService } from './body-injector';
import { ModalRef } from '../models/modal-ref';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private componentFactory!: ComponentFactory<ModalComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService
    ) {
   this.componentFactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
   }

  public open(config: ModalConfig): ModalRef{
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log(componentRef.instance);
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef =  new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponentRef(): ComponentRef<ModalComponent>{
      return this.componentFactory.create(this.injector);
  }
}


