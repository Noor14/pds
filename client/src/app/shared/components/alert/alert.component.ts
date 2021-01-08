import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';
import { IAlertConfig } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  result = new EventEmitter();

  config: IAlertConfig = {
    isError: false,
    headingText: '',
    message: '',
    approveButtonText: '',
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
