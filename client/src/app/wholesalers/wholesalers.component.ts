import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wholesalers',
  templateUrl: './wholesalers.component.html',
  styleUrls: ['./wholesalers.component.scss']
})
export class WholesalersComponent implements OnInit {

  rows = [
    { id: '0000101', name: 'Umrani Medicines', type: 'Local', totalCompanies: 15, startedSince: '06/Nov/2020', contact: '+923001234567', },
    { id: '0000102', name: 'Marri Wholesaler', type: 'Multi', totalCompanies: 70, startedSince: '05/Nov/2020', contact: '+923001234800', },
    { id: '0000103', name: 'Soomro Pharma', type: 'National', totalCompanies: 25, startedSince: '04/Nov/2020', contact: '+923001234909', },
  ];
  columns = [
    { name: 'Wholesaler ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'Type', prop: 'type'},
    { name: 'Total Companies', prop: 'totalCompanies'},
    { name: 'Started Since', prop: 'startedSince'},
    { name: 'Contact', prop: 'contact'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editWholesaler.bind(this)},
    { name: 'Delete', handler: this.deleteWholesaler.bind(this)},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editWholesaler(wholesaler: any, wholesalerIdx: number): void {
    console.log('editWholesaler:', wholesalerIdx, wholesaler);
  }

  deleteWholesaler(wholesaler: any, wholesalerIdx: number): void {
    console.log('deleteWholesaler:', wholesalerIdx, wholesaler);
  }

}
