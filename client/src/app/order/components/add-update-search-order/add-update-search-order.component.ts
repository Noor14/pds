import {Component, EventEmitter, OnInit} from '@angular/core';

import { EOrderModalModes, IAddUpdateSearchOrderConfig } from '../../orders.model';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-update-search-order',
  templateUrl: './add-update-search-order.component.html',
  styleUrls: ['./add-update-search-order.component.scss']
})

export class AddUpdateSearchOrderComponent implements OnInit {
  public result = new EventEmitter ();
  public config: IAddUpdateSearchOrderConfig | undefined;
  private titles = {
    [EOrderModalModes.Add]: 'Add Order',
    [EOrderModalModes.Edit]: 'Edit Order',
    [EOrderModalModes.Search]: 'Search Order',
    [EOrderModalModes.ReadOnly]: 'View Order',
  };

  data = {
    id: '',
    store: '',
    status: '',
    name: '',
    contact: '',
    amount: '',
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : EOrderModalModes.Add;
    return this.titles[mode];
  }

  constructor(
    public bsModalRef: BsModalRef
  ) { }
  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(): any {
    console.log('submitForm:');
  }

  closeModal(): any {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }
  ngOnInit(): void {}

}
