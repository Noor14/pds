import { Component, OnInit } from '@angular/core';

import { UtilService, IConfirmConfig, IAlertConfig } from '@shared/services/util.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  rows = [
    { id: '0000101', batchNumber: 'S-00001', packInfo: '10s', name: 'Amaxol', generice: 'Lotheocylceipsum', type: 'Capsule', company: 'Abbot', tp: 16, mrp: 96, discount: 55, net: 13, boxQuantity: 50, },
    { id: '0000102', batchNumber: 'BS-00002', packInfo: '5s', name: 'Panadol', generice: 'Floeryotiny', type: 'Tablet', company: 'Ipsum', tp: 16, mrp: 4, discount: 71, net: 45, boxQuantity: 100, },
    { id: '0000103', batchNumber: 'TS-00083', packInfo: '30ml', name: 'Brufen', generice: 'Dolarcythn', type: 'Syrup', company: 'Lorem', tp: 16, mrp: 96, discount: 64, net: 13, boxQuantity: 40, },
    { id: '0000104', batchNumber: 'AS-00099', packInfo: '2x7', name: 'Augmentin', generice: 'Teczhocxin', type: 'Capsule', company: 'Medicyne', tp: 50, mrp: 65, discount: 42, net: 65, boxQuantity: 30, },
    { id: '0000104', batchNumber: 'AS-00063', packInfo: '6amp', name: 'Mecobromin', generice: 'Mecobarmin', type: 'Inj', company: 'Medicyne', tp: 50, mrp: 65, discount: 65, net: 40, boxQuantity: 30, },
  ];
  columns = [
    // { name: 'Product ID', prop: 'id',},
    { name: 'Batch #', prop: 'batchNumber',},
    { name: 'Name', prop: 'name',},
    { name: 'Generice', prop: 'generice',},
    // { name: 'Type', prop: 'type',},
    { name: 'Pack', prop: 'packInfo',},
    { name: 'T.P', prop: 'tp',},
    { name: 'M.R.P', prop: 'mrp',},
    { name: 'Discount', prop: 'discount',},
    { name: 'Net', prop: 'net',},
    { name: 'Box Quantity', prop: 'boxQuantity',},
    { name: 'Company', prop: 'company',},
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
    // this.deleteProduct({}, 0);

    // DEV - auto opener - alert
    // this.utilService.alert({
    //   isError: false,
    //   headingText: '',
    //   message: 'This is a sample alert message for the action you just called.',
    //   approveButtonText: 'OK'
    // });
  }

  editProduct(product: any, productIdx: number) : void {
    console.log('editProduct:', productIdx, product);
  }

  deleteProduct(product: any, productIdx: number): void {
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
