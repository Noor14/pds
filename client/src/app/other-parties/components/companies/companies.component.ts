import { Component, OnInit } from '@angular/core';

import { companiesMock } from './companies.mock';
import { ICompany } from './companies.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  rows: ICompany[] = [];
  columns = [
    { name: 'Company ID', prop: 'id'},
    { name: 'Name', prop: 'name'},
    { name: 'Type', prop: 'type'},
    { name: 'Started Since', prop: 'startedSince'},
    { name: 'Total Products', prop: 'totalProducts'},
    { name: 'Total Orders', prop: 'totalOrders'},
    { name: 'Total Sale', prop: 'totalAmount'},
    { name: 'Contact', prop: 'contact'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editCompany.bind(this)},
    { name: 'Delete', handler: this.deleteCompany.bind(this)},
  ];

  constructor() { }

  ngOnInit(): void {

    // TODO implement fetch companies api
    this.rows = companiesMock;
  }

  editCompany(company: any, companyIdx: number): void {
    console.log('editCompany:', companyIdx, company);
  }

  deleteCompany(company: any, companyIdx: number): void {
    console.log('deleteCompany:', companyIdx, company);
  }

}
