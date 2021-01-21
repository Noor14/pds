import { EventEmitter, Injectable } from '@angular/core';

import { take } from 'rxjs/operators';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { AlertComponent } from '@shared/components/alert/alert.component';

import { IAlertConfig } from '../components/alert/alert.model';
import { IConfirmConfig } from '../components/confirm/confirm.model';
import { environment } from '@root/environments/environment';

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

  // mostly used for interceptors for request and response as well.
  isInternalAppAPICall(requestURL: string) : boolean {
    return requestURL.indexOf(environment.apiBaseURL) === 0;
  }

  // returns a new copy of the object ready to be modified from form inputs etc.
  deepCopyObject(source: any): any {
    return JSON.parse(JSON.stringify(source));
  }

  modal(component: any, config: any, options: ModalOptions): EventEmitter<any> {
    console.log('UtilService: modal:', config, options);
    options = Object.assign({}, this.modalDefaultOptions, options);
    const modalRef: BsModalRef = this.modalService.show(component, options);
    modalRef.content.config = config;

    return modalRef.content
      .result
      .pipe(take(1));
  }

  alert(config: IAlertConfig): EventEmitter<any> {
    return this.modal(AlertComponent, config, { class: 'modal--lite' });
  }

  confirm(config: IConfirmConfig): EventEmitter<any> {
    return this.modal(ConfirmComponent, config, { class: 'modal--lite' });
  }
}
