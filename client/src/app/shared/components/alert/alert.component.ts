import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {IConfirmConfig} from "@shared/components/confirm/confirm.model";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
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

}
