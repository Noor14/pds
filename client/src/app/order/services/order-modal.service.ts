import { EventEmitter, Injectable } from '@angular/core';
import { ECRUDModalModes, IAddUpdateSearchOrderConfig, IOrderParsed } from '@root/app/order/orders.model';
import { AddUpdateSearchOrderComponent } from '@root/app/order/components/add-update-search-order/add-update-search-order.component';
import { IConfirmConfig, UtilService } from '@shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class OrderModalService {

  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchOrder(config: IAddUpdateSearchOrderConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchOrderComponent, config, { class: 'modal-lg' });
  }

  openAddOrder(): EventEmitter<any> {
    const config: IAddUpdateSearchOrderConfig = {
      mode: ECRUDModalModes.Add,
      order: null
    };

    return this.addUpdateSearchOrder(config);
  }


  openEditOrder(order: IOrderParsed): EventEmitter<any>{
    const config: IAddUpdateSearchOrderConfig = {
      mode: ECRUDModalModes.Edit,
      order: order
    };

    return this.addUpdateSearchOrder(config);
  }
}
