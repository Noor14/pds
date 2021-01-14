import { EventEmitter, Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { AddUpdateSearchOrderComponent } from '../components/add-update-search-order/add-update-search-order.component';
import { ECRUDModalModes, IAddUpdateSearchOrderConfig } from '../orders.model';

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
      mode: ECRUDModalModes.Add,
      order: null
    };

    return this.addUpdateSearchOrder(config);
  }


  openEditOrder(): EventEmitter<any>{
    const config: IAddUpdateSearchOrderConfig = {
      mode: ECRUDModalModes.Edit,
      order: null
    };

    return this.addUpdateSearchOrder(config);
  }
}

