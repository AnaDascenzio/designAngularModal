import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;


  title = 'projetoModal';
  public firstName = 'Flávio';
  public modalRef!: ModalRef;

  constructor(private modalService : ModalService){}

  public show(): void{
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });

  }
}
