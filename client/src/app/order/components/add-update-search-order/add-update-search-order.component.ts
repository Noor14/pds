import {Component, EventEmitter, OnInit} from '@angular/core';

import { IOrderRaw, ECRUDModalModes, IAddUpdateSearchOrderConfig } from '../../orders.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ITableConfig } from '@shared/components/table/table.model';

@Component({
  selector: 'app-add-update-search-order',
  templateUrl: './add-update-search-order.component.html',
  styleUrls: ['./add-update-search-order.component.scss']
})

export class AddUpdateSearchOrderComponent implements OnInit {
  public result = new EventEmitter ();
  public config: IAddUpdateSearchOrderConfig | undefined;

  private titles = {
    [ECRUDModalModes.Add]: 'Add Order',
    [ECRUDModalModes.Edit]: 'Edit Order',
    [ECRUDModalModes.Search]: 'Search Order',
    [ECRUDModalModes.ReadOnly]: 'View Order',
  };

  rows = [];

  data = {
    id: '',
    store: '',
    area: '',
    status: '',
    name: '',
    formula: '',
    grams: '',
    contact: '',
    company: '',
    quantity: '',
    // order: IOrderRaw[]
  };

  stores = [
    {
      id: 101,
      name: 'Makki Medical Store'
    }, {
      id: 102,
      name: 'Haala Medical Store'
    }, {
      id: 103,
      name: 'Jhang Medical Store'
    }
  ];

  areas = [
    {
      id: 401,
      name: 'Some colony, Malir'
    }, {
      id: 402,
      name: 'Haala road, near (some) bank'
    }
  ];

  products = [
    {
      id: 1001,
      name: 'Neorobon'
    }, {
      id: 1002,
      name: 'Septran'
    }
  ];

  productStatuses = [
    {
      value: 'urgent',
      name: 'Urgent'
    }, {
      value: 'not_urgent',
      name: 'Not Urgent'
    }
  ];

  companies = [
    {
      id: 701,
      name: 'Abbott'
    }, {
      id: 702,
      name: 'Other'
    }
  ];

  formulas = [
    {
      value: 'ds',
      name: 'DS'
    }, {
      value: 'fort',
      name: 'Fort'
    }
  ];

  quantities = [
    {
      value: 12,
      name: '12'
    }, {
      value: 24,
      name: '24'
    }
  ];

  grams = [
    {
      value: 10,
      name: '10mg'
    }, {
      value: 50,
      name: '50Mg'
    }, {
      value: 0.0005,
      name: '5cc'
    },  {
      value: 0.1000,
      name: '1000cc'
    }
  ];

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    console.log(this.config);
    return this.titles[mode];
  }
  columns = [
    { name: 'Order ID', prop: 'id'},
    { name: 'Store', prop: 'orderByName'},
    { name: 'Status', prop: 'status'},
    { name: 'Amount', prop: 'oderAmount'},
    { name: 'Ordered On', prop: 'orderedOn'},
    { name: 'Store Contact', prop: 'orderByContact'},
  ];
  actions = [];

  tableConfig: ITableConfig = {};

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };
  responseMessages = {
    success: {
      add: 'User has been added successfully.',
      update: 'User has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding user !',
      update: 'Failed in updating user !',
    },
  };

  constructor(
    public bsModalRef: BsModalRef
  ) { }
  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(): any {
    console.log('submitForm:', this.data);
    this.bsModalRef.hide();
  }

  defaultSelectedOption ( value: any ) {
    return (typeof value === 'string' && value.length <= 0 ? '' : value === null ? null : undefined);
  }

  closeModal(): any {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }
  ngOnInit(): void {
    // console.log(IOrderRaw[]);
  }

}
