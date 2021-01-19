import { Component, OnInit } from '@angular/core';

import { UtilService } from '@shared/services/util.service';
import { ITableConfig } from '@shared/components/table/table.model';
import { IConfirmConfig } from '@shared/components/confirm/confirm.model';

import { StoreService } from './services/store.service';
import { StoreModalsService } from './services/store-modals.service';
import { IStoreParsed } from './stores.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  rows: IStoreParsed[] = [];
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

  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchProduct.bind(this),
    // },
    addItem: {
      buttonText: 'Add Store',
      handler: this.addStore.bind(this),
    }
  };

  constructor(
    private storeService: StoreService,
    private storeModalsService: StoreModalsService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.fetchStores();
  }

  fetchStores(): void {
    console.log('fetchStores:');
    this.storeService.apiGetList({})
      .subscribe((res: { stores: IStoreParsed[], totalCount: number }) => {
        console.log('fetchStores: success', res.stores);

        this.rows = res.stores;
      }, (reason: string) => {
        console.log('fetchStores: error');
      });
  }

  addStore(): any {
    console.log('addStore:');
    this.storeModalsService.openAddStore();
  }

  editProduct(product: any, productIdx: number): void {
    console.log('editProduct:', product, productIdx);
    this.storeModalsService.openEditStore();
  }

  deleteProduct(product: any, productIdx: number): void {
    console.log('deleteProduct:', product, productIdx);

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
