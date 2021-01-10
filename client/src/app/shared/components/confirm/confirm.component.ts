import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { IConfirmConfig } from './confirm.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  public result = new EventEmitter();
  public config: IConfirmConfig | undefined = undefined;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  public approve(): void {
    this.result.emit();
    this.bsModalRef.hide();
  }

  public decline(): void {
    this.result.error('');
    this.bsModalRef.hide();
  }
}
