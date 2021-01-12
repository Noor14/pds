import { EventEmitter, Injectable } from '@angular/core';

import { take } from 'rxjs/operators';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { AlertComponent } from '@shared/components/alert/alert.component';

import { IAlertConfig } from '../components/alert/alert.model';
import { IConfirmConfig } from '../components/confirm/confirm.model';

export { IAlertConfig, IConfirmConfig }

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  modalDefaultOptions: ModalOptions = {
    backdrop: 'static',
    // keyboard: true,
    // focus: true,
    // show: false,
    // ignoreBackdropClick: false,
    class: '', // 'modal--lite'
    animated: false,
  };

  constructor(
    private modalService: BsModalService,
  ) { }

  public modal(component: any, config: any, options: any): EventEmitter<any> {
    console.log(config, options);
    options = Object.assign({}, this.modalDefaultOptions, options);
    const modalRef: BsModalRef = this.modalService.show(component, options);
    modalRef.content.config = config;

    return modalRef.content
      .result
      .pipe(take(1));
  }

  public alert(config: IAlertConfig): EventEmitter<any> {
    return this.modal(AlertComponent, config, { class: 'modal--lite' });
  }

  public confirm(config: IConfirmConfig): EventEmitter<any> {
    return this.modal(ConfirmComponent, config, { class: 'modal--lite' });
  }
}
