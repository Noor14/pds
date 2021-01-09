import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { OrderRoutingModule } from './order-routing.module';

import { AddUpdateSearchOrderComponent } from './components/add-update-search-order/add-update-search-order.component';
import { OrdersComponent } from './orders.component';


@NgModule({
  declarations: [
    OrdersComponent,
    AddUpdateSearchOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    OrderRoutingModule,
  ]
})
export class OrderModule { }
