import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  rows = [
    { id: '0000101', name: 'ABC Store', type: 'supplier', product: 10, amount: 1500, city: 'Karachi', },
    { id: '0000102', name: 'DEF Store', type: 'pharmacy', product: 26, amount: 2500, city: 'Lahore', },
    { id: '0000103', name: 'GHI Store', type: 'supplier', product: 306, amount: 10500, city: 'Karachi', },
    { id: '0000104', name: 'JKL Store', type: 'pharmacy', product: 1, amount: 150, city: 'Hyderabad', },
    { id: '0000105', name: 'LMN Store', type: 'supplier', product: 10, amount: 1500, city: 'Karachi', },
  ];
  columns = [
    { name: 'ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'type', prop: 'type'},
    { name: 'product', prop: 'product'},
    { name: 'amount', prop: 'amount'},
    { name: 'city', prop: 'city'}  ];
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
