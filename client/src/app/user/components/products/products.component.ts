import { Component, OnInit } from '@angular/core';

import { UtilService, IConfirmConfig } from '@shared/services/util.service';
import { ProductService } from '@user/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  rows = [
    { id: '0000101', name: 'Amaxol', type: 'Capsule', company: 'Abbot', tp: 16, retail: 96, minQuantity: 50, wholesaler: 'Ahmed Brothers'},
    { id: '0000102', name: 'Panadol', type: 'Tablet', company: 'Ipsum', tp: 16, retail: 4, minQuantity: 100, wholesaler: 'Bilal Brothers'},
    { id: '0000103', name: 'Brufen', type: 'Syrup', company: 'Lorem', tp: 16, retail: 96, minQuantity: 40, wholesaler: 'Bilal Brothers'},
    { id: '0000104', name: 'Augmentin', type: 'Capsule', company: 'Medicyne', tp: 50, retail: 65, minQuantity: 30, wholesaler: 'Hussain Brothers'},
  ];
  columns = [
    { name: 'Product ID', prop: 'id',},
    { name: 'Name', prop: 'name',},
    { name: 'Type', prop: 'type',},
    { name: 'Company', prop: 'company',},
    { name: 'T.P', prop: 'tp',},
    { name: 'Retail Price', prop: 'retail',},
    { name: 'Packet Quantity', prop: 'minQuantity',},
    { name: 'Wholesaler', prop: 'wholesaler',},
    ];
  actions = [
    { name: 'View / Edit', handler: this.editProduct.bind(this)},
    { name: 'Delete', handler: this.deleteProduct.bind(this)},
  ];

  constructor(
    private productService: ProductService,
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {

    // for sample mock data. -  to see pagination in action.
    for (let i = 0; i < 5; i++) {
      this.rows = this.rows.concat(this.rows);
    }

    // DEV - auto opener - deleteProduct
    this.deleteProduct({}, 0);
  }

  editProduct(product: any, productIdx: number) : void {
    console.log('editProduct:', productIdx, product);
  }

  deleteProduct(product: any, productIdx: number) : void {
    console.log('deleteProduct:', productIdx, product);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this product from system ?',
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
