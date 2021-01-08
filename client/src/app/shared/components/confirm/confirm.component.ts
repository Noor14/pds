import { Component, OnInit, EventEmitter } from '@angular/core';

import { IConfirmConfig } from './confirm.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  result = new EventEmitter();

  config: IConfirmConfig = {
    message: '',
    approveButtonText: '',
    declineButtonText: ''
  };

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  approve() {
    this.result.emit();
    this.bsModalRef.hide();
  }

  decline() {
    this.result.error('');
    this.bsModalRef.hide();
  }
}
