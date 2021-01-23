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
    { name: 'Name', prop: 'name'},
    { name: 'username', prop: 'username'},
    { name: 'Area / City', prop: 'customAreaName'},
    { name: 'Member Since', prop: 'createdOn'},
    { name: 'Contact', prop: 'customPersons'},
    { name: 'Total Orders', prop: 'totalOrders'},
    { name: 'Total Amount', prop: 'totalSaleAmount'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editStore.bind(this)},
    { name: 'Delete', handler: this.deleteStore.bind(this)},
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

  messages = {
    emptyMessage: '', // dynamic based of the fetch error, or filter to none.
    customNoRecords: 'No Companies found in the system. Please click "New Company" to add one.',
    customFilteredNoMatch: 'No Companies match with entered value.',
    customFetchError: 'Failed in fetching Companies.',
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
        this.messages.emptyMessage = this.messages.customNoRecords;
      }, (reason: string) => {
        console.log('fetchStores: error');
        this.messages.emptyMessage = this.messages.customFetchError;
      });
  }

  addStore(): void {
    console.log('addStore:');
    this.storeModalsService.openAddStore()
      .subscribe((res: any) => {
        console.log('editStore: success', res);

        // refresh table to load latest records.
        this.fetchStores();
      });
  }

  editStore(store: any, storeIdx: number): void {
    console.log('editStore:', storeIdx, store);

    this.storeModalsService.openEditStore(store)
      .subscribe((res: any) => {
        console.log('editStore: success', res);

        // refresh table to load latest records.
        this.fetchStores();
      });
  }

  deleteStore(store: any, storeIdx: number): void {
    console.log('deleteStore:', storeIdx, store);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this store from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: prompt: approve', res);

        this.storeService.apiDeleteOne(store.id)
          .subscribe((res: any) => {
            console.log('deleteStore: success', res);

            this.utilService.alert({
              isError: false,
              headingText: 'Done !',
              message: 'Store has been removed successfully.',
              approveButtonText: 'OK'
            });

            // refresh table to load latest records.
            this.fetchStores();

          }, (reason: string) => {
            console.log('deleteStore: failed', res);

            this.utilService.alert({
              isError: true,
              headingText: '',
              message: 'Store could not be deleted.',
              approveButtonText: 'OK'
            });
          });

      }, (reason: string) => {
        console.log('confirm: prompt: decline');
      });
  }
}
