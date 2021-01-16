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
}

