import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  rows = [
    { id: '0000101', name: 'Bismillah Medical Store', city: 'Manjoshoori', memberSince: '06/Nov/2020', contact: '+923001234567', totalOrders: 35, totalAmount: '2,40,000'},
    { id: '0000102', name: 'Ahmed Pharmacy', city: '40 Dip', memberSince: '05/Nov/2020', contact: '+92333199999', totalOrders: 35, totalAmount: '3,50,000'},
    { id: '0000103', name: 'Yaqoob Medical', city: 'Balam Dip', memberSince: '04/Nov/2020', contact: '+92300177777', totalOrders: 35, totalAmount: '1,20,000'},
    { id: '0000104', name: 'Pakistan Medical Store', city: 'Jal Magsi', memberSince: '06/Oct/2020', contact: '+923021234500', totalOrders: 35, totalAmount: '50,000'},
    { id: '0000105', name: 'Rutba Medical Complex', city: 'Dera Murad Jamali', memberSince: '05/Oct/2020', contact: '+923441239980', totalOrders: 35, totalAmount: '10,000'},
    { id: '0000106', name: 'Boraak Pharmacy', city: 'Dera Murad Jamali', memberSince: '05/Oct/2020', contact: '+92344123998035', totalOrders: 35, totalAmount: '3,000'},
  ];
  columns = [
    { name: 'Store ID', prop: 'id'},
    { name: 'Store Name', prop: 'name'},
    { name: 'Area / City', prop: 'city'},
    { name: 'Member Since', prop: 'memberSince'},
    { name: 'Contact', prop: 'contact'},
    { name: 'Total Orders', prop: 'totalOrders'},
    { name: 'Total Amount', prop: 'totalAmount'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editProduct.bind(this)},
    { name: 'Delete', handler: this.deleteProduct.bind(this)},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editProduct(product: any, productIdx: number): void {
    console.log('editProduct:', productIdx, product);
  }

  deleteProduct(product: any, productIdx: number): void {
    console.log('deleteProduct:', productIdx, product);
  }
}
