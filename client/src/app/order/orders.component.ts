import { Component, OnInit } from '@angular/core';

import { OrderService } from './services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  rows = [
    { id: '0000101', status: 'Pending', orderByName: 'Bismillah Medical Store', orderedOn: '04:30PM 01/Feb/2021', oderAmount: 'Rs. 40,235', orderByContact: '+923001234567'},
    { id: '0000102', status: 'In Progress', orderByName: 'Ahmed Pharmacy', orderedOn: '03:30PM 01/Feb/2021', oderAmount: 'Rs. 10,800', orderByContact: '+92333199999'},
    { id: '0000103', status: 'In Progress', orderByName: 'Rutba Medical Complex', orderedOn: '02:00PM 01/Feb/2021', oderAmount: 'Rs. 1,42,000', orderByContact: '+923021234500'},
    { id: '0000104', status: 'Processed', orderByName: 'Boraak Pharmacy', orderedOn: '01:30PM 01/Feb/2021', oderAmount: 'Rs. 2,00,000', orderByContact: '+92300177777'},
    { id: '0000105', status: 'Pending', orderByName: 'Yaqoob Medical', orderedOn: '01:00PM 01/Feb/2021', oderAmount: 'Rs. 3,20,000', orderByContact: '+923001234567'},
    { id: '0000106', status: 'Processed', orderByName: 'Pakistan Medical', orderedOn: '11:00AM 01/Feb/2021', oderAmount: 'Rs. 15,000', orderByContact: '+92344123998035'},
  ];
  columns = [
    { name: 'Order ID', prop: 'id'},
    { name: 'Store', prop: 'orderByName'},
    { name: 'Status', prop: 'status'},
    { name: 'Amount', prop: 'oderAmount'},
    { name: 'Ordered On', prop: 'orderedOn'},
    { name: 'Store Contact', prop: 'orderByContact'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editOrder.bind(this)},
    { name: 'Delete', handler: this.deleteOrder.bind(this)},
  ];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {

    // load for testing
    this.addOrder();
  }

  editOrder(order: any, orderId: number): void {
    this.orderService.openEditOrder();

    console.log('editOrder:', orderId, order);
  }

  deleteOrder(order: any, orderId: number): void {
    console.log('deleteOrder:', orderId, order);
  }

  addOrder(): void {
    console.log('addOrder:');
    this.orderService.openAddOrder();
  }


}
