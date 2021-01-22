import { Component, OnInit } from '@angular/core';

import { OrderService } from './services/order.service';
import { IConfirmConfig } from '@shared/components/confirm/confirm.model';
import { UtilService } from '@shared/services/util.service';
import { OrderModalService } from '@root/app/order/services/order-modal.service';
import { ITableConfig } from '@shared/components/table/table.model';
import { IOrderParsed } from '@root/app/order/orders.model';
import { ICompanyParsed } from '@root/app/companies/companies.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  rows: IOrderParsed[] = [];
  columns = [
    { name: 'Order ID', prop: 'id'},
    { name: 'Store Name', prop: 'customStoreName'},
    { name: 'Status', prop: 'customStatus'},
    { name: 'Amount', prop: 'customOrderAmount'},
    { name: 'Ordered On', prop: 'createdOn'},
    { name: 'Store Contact', prop: 'customStoreContact'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editOrder.bind(this)},
    { name: 'Delete', handler: this.deleteOrder.bind(this)},
  ];

  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchProduct.bind(this),
    // },
    addItem: {
      buttonText: 'New Order',
      handler: this.addOrder.bind(this),
    }
  };
  messages = {
    emptyMessage: '', // dynamic based of the fetch error, or filter to none.
    customNoRecords: 'No Orders found in the system. please click "New Order" to add one.',
    customFilteredNoMatch: 'No Orders match with entered value.',
    customFetchError: 'Failed in fetching Orders.',
  };

  constructor(
    private orderService: OrderService,
    private orderModalService: OrderModalService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {

    this.fetchOrders();

    // DEV - auto opener - addOrder
    // this.addOrder();
  }

  fetchOrders(): void {
    // console.log('fetchOrders:');
    this.orderService.apiGetList({})
      .subscribe((res: { orders: IOrderParsed[], totalCount: number }) => {
        console.log('fetchOrders: success', res.orders);

        this.rows = res.orders;
        // this.rows = [];

        this.messages.emptyMessage = this.messages.customNoRecords;
      }, (reason: string) => {
        console.log('fetchOrders: error', reason);
        this.messages.emptyMessage = this.messages.customFetchError;
      });
  }

  addOrder(): void {
    console.log('addOrder:');
    this.orderModalService.openAddOrder();
  }

  editOrder(order: any, orderId: number): void {
    console.log('editOrder:', orderId, order);
    this.orderModalService.openEditOrder();
  }

  deleteOrder(order: any, orderId: number): void {
    console.log('deleteOrder:', orderId, order);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this order from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: approve', res);

      }, (reason: string) => {
        console.log('confirm: decline');
      });
  }

}
