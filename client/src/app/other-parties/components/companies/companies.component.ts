import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  rows = [
    { id: '0000101', name: 'Fisher', type: 'Local', totalProducts: 50, totalOrders: 35, totalAmount: 'Rs. 2,40,000', startedSince: '06/Nov/2020', contact: '+923001234567', },
    { id: '0000102', name: 'Abbott', type: 'Multi', totalProducts: 200, totalOrders: 60, totalAmount: 'Rs. 4,40,000', startedSince: '05/Nov/2020', contact: '+923001234800', },
    { id: '0000103', name: 'Adhcok', type: 'National', totalProducts: 135, totalOrders: 40, totalAmount: 'Rs. 60,000', startedSince: '04/Nov/2020', contact: '+923001234909', },
  ];
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
  }

  editCompany(company: any, companyIdx: number): void {
    console.log('editCompany:', companyIdx, company);
  }

  deleteCompany(company: any, companyIdx: number): void {
    console.log('deleteCompany:', companyIdx, company);
  }

}
