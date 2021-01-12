import { EventEmitter, Injectable } from '@angular/core';
import { EOrderModalModes, IAddUpdateSearchOrderConfig } from '../orders.model';
import {UtilService} from '@shared/services/util.service';

import { AddUpdateSearchOrderComponent } from '../components/add-update-search-order/add-update-search-order.component';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchOrder(config: IAddUpdateSearchOrderConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchOrderComponent, config, { class: 'modal-lg' });
  }

  openAddOrder(): EventEmitter<any> {
    const config: IAddUpdateSearchOrderConfig = {
      mode: EOrderModalModes.Add,
      order: null
    };

    return this.addUpdateSearchOrder(config);
  }


  openEditOrder(): EventEmitter<any>{
    const config: IAddUpdateSearchOrderConfig = {
      mode: EOrderModalModes.Add,
      order: null
    };

    return this.addUpdateSearchOrder(config);
  }

}
