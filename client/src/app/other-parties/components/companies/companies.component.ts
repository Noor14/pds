import { Component, OnInit } from '@angular/core';

import { companiesMock } from './companies.mock';
import { ICompanyParsed } from './companies.model';
import { ITableConfig } from '@shared/components/table/table.model';
import { CompanyService } from '@root/app/other-parties/services/company.service';
import { IConfirmConfig } from '@shared/components/confirm/confirm.model';
import { UtilService } from '@shared/services/util.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  rows: ICompanyParsed[] = [];
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
  config: ITableConfig = {
    // advanceSearchItem: {
    //   buttonText: 'Advance Search',
    //   handler: this.searchProduct.bind(this),
    // },
    addItem: {
      buttonText: 'New Company',
      handler: this.addCompany.bind(this),
    }
  };

  constructor(
    private companyService: CompanyService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {

    // TODO implement fetch companies api
    this.rows = companiesMock;
  }

  addCompany(): void {
  }

  editCompany(company: any, companyIdx: number): void {
    console.log('editCompany:', companyIdx, company);
    this.companyService.openEditCompany(company)
      .subscribe((res: any) => {
        console.log('editCompany: success', res);
      });
  }

  deleteCompany(company: any, companyIdx: number): void
  {
    console.log('deleteArea:', companyIdx, company);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this company from system ?',
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
