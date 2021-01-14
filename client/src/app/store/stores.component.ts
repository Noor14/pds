import { Component, OnInit } from '@angular/core';

import { StoreService } from './services/store.service';
import {IConfirmConfig} from '@shared/components/confirm/confirm.model';
import {UtilService} from '@shared/services/util.service';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  rows = [
    { id: '0000101', name: 'Bismillah Medical Store', city: 'Manjoshoori', memberSince: '06/Nov/2020', contact: '+923001234567', totalOrders: 35, totalAmount: 'Rs. 2,40,000'},
    { id: '0000102', name: 'Ahmed Pharmacy', city: '40 Dip', memberSince: '05/Nov/2020', contact: '+92333199999', totalOrders: 12, totalAmount: 'Rs. 3,50,000'},
    { id: '0000103', name: 'Yaqoob Medical', city: 'Balam Dip', memberSince: '04/Nov/2020', contact: '+92300177777', totalOrders: 200, totalAmount: 'Rs. 1,20,000'},
    { id: '0000104', name: 'Pakistan Medical Store', city: 'Jal Magsi', memberSince: '06/Oct/2020', contact: '+923021234500', totalOrders: 100, totalAmount: 'Rs. 50,000'},
    { id: '0000105', name: 'Rutba Medical Complex', city: 'Dera Murad Jamali', memberSince: '05/Oct/2020', contact: '+923441239980', totalOrders: 40, totalAmount: 'Rs. 10,000'},
    { id: '0000106', name: 'Boraak Pharmacy', city: 'Dera Murad Jamali', memberSince: '05/Oct/2020', contact: '+92344123998035', totalOrders: 300, totalAmount: 'Rs. 3,000'},
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

  constructor(
    private storeService: StoreService,
    private utilService: UtilService) { }

  ngOnInit(): void {
  }

  addStore(): any {
    this.storeService.openAddStore();
  }

  editProduct(product: any, productIdx: number): void {
    this.storeService.openEditStore();
  }

  deleteProduct(product: any, productIdx: number): void {
    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this store from system ?',
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
