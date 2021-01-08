import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  rows = [
    { id: '0000101', orderByName: 'Bismillah Medical Store', orderedOn: '04:30PM 01/Feb/2021', oderAmount: 'Rs. 40,235', orderByContact: '+923001234567'},
    { id: '0000102', orderByName: 'Ahmed Pharmacy', orderedOn: '03:30PM 01/Feb/2021', oderAmount: 'Rs. 10,800', orderByContact: '+92333199999'},
    { id: '0000103', orderByName: 'Rutba Medical Complex', orderedOn: '02:00PM 01/Feb/2021', oderAmount: 'Rs. 1,42,000', orderByContact: '+923021234500'},
    { id: '0000104', orderByName: 'Boraak Pharmacy', orderedOn: '01:30PM 01/Feb/2021', oderAmount: 'Rs. 2,00,000', orderByContact: '+92300177777'},
    { id: '0000105', orderByName: 'Yaqoob Medical', orderedOn: '01:00PM 01/Feb/2021', oderAmount: 'Rs. 3,20,000', orderByContact: '+923001234567'},
    { id: '0000106', orderByName: 'Pakistan Medical', orderedOn: '11:00AM 01/Feb/2021', oderAmount: 'Rs. 15,000', orderByContact: '+92344123998035'},
  ];
  columns = [
    { name: 'Order ID', prop: 'id'},
    { name: 'Order By', prop: 'orderByName'},
    { name: 'Ordered On', prop: 'orderedOn'},
    { name: 'Order Amount', prop: 'oderAmount'},
    { name: 'Order Contact', prop: 'orderByContact'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editOrder.bind(this)},
    { name: 'Delete', handler: this.deleteOrder.bind(this)},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editOrder(order: any, orderId: number): void {
    console.log('editOrder:', orderId, order);
  }

  deleteOrder(order: any, productIdx: number): void {
    console.log('deleteOrder:', productIdx, order);
  }
}
