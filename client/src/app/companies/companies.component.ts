import { Component, OnInit } from '@angular/core';

import { ITableConfig } from '@shared/components/table/table.model';
import { CompanyService } from '@root/app/companies/services/company.service';
import { IConfirmConfig } from '@shared/components/confirm/confirm.model';
import { UtilService } from '@shared/services/util.service';
import { ICompanyParsed } from './companies.model';
import { CompanyModalsService } from '@root/app/companies/services/company-modals.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  rows: ICompanyParsed[] = [];
  columns = [
    { name: 'Company ID', prop: 'id'},
    { name: 'Company Name', prop: 'name'},
    { name: 'Type', prop: 'customType'},
    { name: 'Started Since', prop: 'createdOn'},
    { name: 'Total Products', prop: 'totalProducts'},
    { name: 'Total Orders', prop: 'totalOrders'},
    { name: 'Total Sale', prop: 'totalAmount'},
    { name: 'Contact', prop: 'customPersons'},
  ];
  actions = [
    { name: 'View / Edit', handler: this.editCompany.bind(this)},
    { name: 'Delete', handler: this.deleteCompany.bind(this)},
  ];
  messages = {
    emptyMessage: '', // dynamic based of the fetch error, or filter to none.
    customNoRecords: 'No Companies found in the system. please click "New Company" to add one.',
    customFilteredNoMatch: 'No Companies match with entered value.',
    customFetchError: 'Failed in fetching Companies.',
  };

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
    private companyModalsService: CompanyModalsService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {

    this.fetchCompanies();
  }

  fetchCompanies(): void {
    // console.log('fetchCompanies:');
    this.companyService.apiGetList({})
      .subscribe((res: { companies: ICompanyParsed[], totalCount: number }) => {
        console.log('fetchCompanies: success', res.companies);

        this.rows = res.companies;
        // this.rows = [];

        this.messages.emptyMessage = this.messages.customNoRecords;
      }, (reason: string) => {
        console.log('fetchCompanies: error', reason);
        this.messages.emptyMessage = this.messages.customFetchError;
      });
  }

  // searchCompany(): void {
  //   console.log('searchCompany:');
  //   this.companyModalsService.openSearchCompany()
  //     .subscribe((res: any) => {
  //       console.log('searchCompany: success', res);
  //
  //       // here to render the search results and trigger table change.
  //       //...
  //     });
  // }

  addCompany(): void {
    console.log('addCompany:');
    this.companyModalsService.openAddCompany();
  }

  editCompany(company: any, companyIdx: number): void {
    console.log('editCompany:', companyIdx, company);

    this.companyModalsService.openEditCompany(company)
      .subscribe((res: any) => {
        console.log('editCompany: success', res);
      });
  }

  deleteCompany(company: any, companyIdx: number): void
  {
    console.log('deleteCompany:', companyIdx, company);

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
