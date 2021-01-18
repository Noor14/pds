import { Component, OnInit } from '@angular/core';

import { IConfirmConfig, UtilService } from '@shared/services/util.service';
import { ITableConfig } from '@shared/components/table/table.model';

import { IArea } from './areas.model';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  rows: IArea[] = [];
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
    this.areaService.apiFetchAreas()
      .subscribe((res: { areas: IArea[], totalCount: number }) => {
        console.log('fetchAreas: success', res.areas);

        this.rows = res.areas;
      }, (reason: string) => {
        console.log('fetchAreas: error');
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
    this.areaService.openAddArea();
  }

  editArea(area: any, areaIdx: number): void {
    console.log('editArea:', areaIdx, area);

    this.areaService.openEditArea(area)
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
        console.log('confirm: approve', res);

      }, (reason: string) => {
        console.log('confirm: decline');
      });
  }
}
