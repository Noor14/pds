import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  rows = [
    { id: '0000101', name: 'Amaxol', type: 'Capsule', company: 'Lorem', tp: 16, retail: 96, minQuantity: 50, wholesaler: 'Ahmed Brothers'},
    { id: '0000102', name: 'Panadol', type: 'Tablet', company: 'Lorem', tp: 16, retail: 4, minQuantity: 100, wholesaler: 'Bilal Brothers'},
    { id: '0000103', name: 'Brufen', type: 'Syrup', company: 'Lorem', tp: 16, retail: 96, minQuantity: 40, wholesaler: 'Bilal Brothers'},
    { id: '0000104', name: 'Augmentin', type: 'Capsule', company: 'Lorem', tp: 50, retail: 65, minQuantity: 30, wholesaler: 'Hussain Brothers'},
  ];
  columns = [
    { name: 'ID', prop: 'id',},
    { name: 'Name', prop: 'name',},
    { name: 'Type', prop: 'type',},
    { name: 'Company', prop: 'company',},
    { name: 'T.P', prop: 'tp',},
    { name: 'Retail', prop: 'retail',},
    { name: 'Min Quantity', prop: 'minQuantity',},
    { name: 'Wholesaler', prop: 'wholesaler',},
    ];
  actions = [
    { name: 'View / Edit', handler: this.editProduct.bind(this)},
    { name: 'Delete', handler: this.deleteProduct.bind(this)},
  ];

  constructor() { }

  ngOnInit(): void {

    // for sample mock data. -  to see pagination in action.
    for (let i = 0; i < 5; i++) {
      this.rows = this.rows.concat(this.rows);
    }
  }

  editProduct(product: any, productIdx: number) : void {
    console.log('editProduct:', productIdx, product);
  }

  deleteProduct(product: any, productIdx: number) : void {
    console.log('deleteProduct:', productIdx, product);
  }
}
