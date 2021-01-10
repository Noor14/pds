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
    class: 'modal--lite',
  };

  constructor(
    private modalService: BsModalService,
  ) { }

  public modal(component: any, config: any, options: any): EventEmitter<any> {
    options = Object.assign({}, this.modalDefaultOptions, options);
    const modalRef: BsModalRef = this.modalService.show(component, options);
    modalRef.content.config = config;

    return modalRef.content
      .result
      .pipe(take(1));
  }

  public alert(config: IAlertConfig): EventEmitter<any> {
    return this.modal(AlertComponent, config, {});
  }

  public confirm(config: IConfirmConfig): EventEmitter<any> {
    return this.modal(ConfirmComponent, config, {});
  }
}
