import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { ITableConfig } from '@shared/components/table/table.model';
import { IOrderRaw, ECRUDModalModes, IAddUpdateSearchOrderConfig } from '../../orders.model';
import { OrderService } from '@root/app/order/services/order.service';
import { UtilService } from '@shared/services/util.service';
import { IStoreParsed } from '@root/app/store/stores.model';
import { IChoices } from '@shared/models/general.model';
import { companyTypes } from '@root/app/companies/companies.constant';
import { personTypes } from '@shared/constants/types.constant';
import { StoreService } from '@root/app/store/services/store.service';
import { productsSettings } from '@root/app/product/products.constant';

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
  data: any = {
    storeId: undefined,
    productsSnapshot: this.rows,

    // visible to admin only.
    tpPercent: productsSettings.tpPercent,
  };

  choices: IChoices = {
    stores: [],
  };
  autoComplete = {
    text: ''
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };
  responseMessages = {
    success: {
      add: 'Order has been created successfully.',
      update: 'Order has been updated successfully.',
    },
    failure: {
      add: 'Failed in creating new order !',
      update: 'Failed in updating order !',
    },
  };

  constructor(
    public bsModalRef: BsModalRef,
    public utilService: UtilService,
    public orderService: OrderService,
    public storeService: StoreService,
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit:');

    // waiting for the assignment. i.e. for second event loop digest.
    setTimeout(() => {
      this.renderOrderToEdit();
    });

    // load stores for dropdown choices
    this.storeService.apiGetList({})
      .subscribe((res: { stores: IStoreParsed[], totalCount: number }) => {
        this.choices.stores = res.stores;
      });
  }

  renderOrderToEdit() {
    if (this.config && this.config.order) {
      this.data = this.utilService.deepCopyObject(this.config.order);
    }
  }

  resetForm(): void {
    console.log('resetForm:');
    this.renderOrderToEdit();
    this.resetFormStatus(false, '', '');
  }

  resetFormStatus(sending: boolean, type: string, message: string) {
    console.log('resetFormStatus:');
    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  submitForm(form: any): void {

    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    this.resetFormStatus(true, '', '');

    switch (this.config?.mode) {
      case ECRUDModalModes.Add:
        this.addOrder(this.data);
        break;
      case ECRUDModalModes.Edit:
        this.updateOrder(this.data);
        break;
    }
  }

  addOrder(order: IOrderRaw): void {
    this.orderService.apiAddOne(order)
      .subscribe((res: any) => {
          console.log('add order : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile();
        },
        (reason: any) => {
          console.log('add order : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });
  }

  updateOrder(order: IOrderRaw): void {
    this.orderService.apiUpdateOne(order)
      .subscribe((res: any) => {
          console.log('updated order : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile();
        },
        (res: any) => {
          console.log('updated order : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile() {
    setTimeout(this.bsModalRef.hide, 3000);
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
