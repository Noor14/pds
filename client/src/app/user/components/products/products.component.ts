import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [
    { name: 'ID', value: 'id',},
    { name: 'Name', value: 'name',},
    { name: 'Company', value: 'company',},
    { name: 'T.P', value: 'tp',},
    { name: 'Retail', value: 'retail',},
    { name: 'Min Quantity', value: 'minQuantity',},
    { name: 'Wholesaler', value: 'wholesaler',},
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
