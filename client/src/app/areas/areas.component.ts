import { Component, OnInit } from '@angular/core';

import { IConfirmConfig, UtilService } from '@shared/services/util.service';
import { ITableConfig } from '@shared/components/table/table.model';

import { IAreaParsed } from './areas.model';
import { AreaService } from './services/area.service';
import { AreaModalsService } from '@root/app/areas/services/area-modals.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  rows: IAreaParsed[] = [];
  columns = [
    { name: 'Area ID', prop: 'id',},
    { name: 'Name', prop: 'name'},
    { name: 'Total Sale', prop: 'totalSale'},
    { name: 'Active Contracts', prop: 'totalActiveContracts'},
    { name: 'Total Orders', prop: 'totalOrders'},
    { name: 'Total Stores', prop: 'totalStores'},
    { name: 'Total Doctors', prop: 'totalDoctors'},
    { name: 'Total Contracts', prop: 'totalContracts'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editArea.bind(this)},
    { name: 'Delete', handler: this.deleteArea.bind(this)},
  ];

  messages = {
    emptyMessage: '', // dynamic based of the fetch error, or filter to none.
    customNoRecords: 'No Areas found in the system. Please click "Add Area" to add one.',
    customFilteredNoMatch: 'No Areas match with entered value.',
    customFetchError: 'Failed in fetching Areas.',
  };

  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchArea.bind(this),
    // },
    addItem: {
      buttonText: 'Add Area',
      handler: this.addArea.bind(this),
    }
  };

  constructor(
    private areaService: AreaService,
    private areaModalsService: AreaModalsService,
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {

    this.fetchAreas();

    // DEV - auto opener - deleteArea
    // this.deleteArea({}, 0);

    // DEV - auto opener - addArea
    // this.addArea();

    // DEV - auto opener - alert
    // this.utilService.alert({
    //   isError: false,
    //   headingText: '',
    //   message: 'This is a sample alert message for the action you just called.',
    //   approveButtonText: 'OK'
    // });
  }

  fetchAreas(): void {
    console.log('fetchAreas:');
    this.areaService.apiGetList({})
      .subscribe((res: { areas: IAreaParsed[], totalCount: number }) => {
        console.log('fetchAreas: success', res.areas);

        this.rows = res.areas;
        this.messages.emptyMessage = this.messages.customNoRecords;
      }, (reason: string) => {
        console.log('fetchAreas: error');
        this.messages.emptyMessage = this.messages.customFetchError;
      });
  }

  // searchArea(): void {
  //   console.log('searchArea:');
  //   this.areaService.openSearchArea()
  //     .subscribe((res: any) => {
  //       console.log('searchArea: success', res);
  //
  //       // here to render the search results and trigger table change.
  //       //...
  //     });
  // }

  addArea(): void {
    console.log('addArea:');
    this.areaModalsService.openAddArea()
      .subscribe((res: any)=> {
        console.log('res', res);
        this.ngOnInit();
      },(error: any)=> {
        console.log('error', error);
      });
  }

  editArea(area: any, areaIdx: number): void {
    console.log('editArea:', areaIdx, area);

    this.areaModalsService.openEditArea(area)
      .subscribe((res: any) => {
        console.log('editArea: success', res);

        // here to refresh the table, or update the target area object and trigger table change.
        //...
      });
  }

  deleteArea(area: any, areaIdx: number): void {
    console.log('deleteArea:', areaIdx, area);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this area from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: prompt: approve', res);

        this.areaService.apiDeleteOne(area.id)
          .subscribe((res: any) => {
            console.log('deleteArea: success', res);

            this.utilService.alert({
              isError: false,
              headingText: 'Done !',
              message: 'Area has been removed successfully.',
              approveButtonText: 'OK'
            });

            // refresh table to load latest records.
            this.fetchAreas();

          }, (reason: string) => {
            console.log('deleteArea: failed', res);

            this.utilService.alert({
              isError: true,
              headingText: '',
              message: 'Area could not be deleted.',
              approveButtonText: 'OK'
            });
          });

      }, (reason: string) => {
        console.log('confirm: prompt: decline');
      });
  }
}
