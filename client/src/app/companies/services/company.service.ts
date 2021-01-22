import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

import {
  IAddCompanySuccessData,
  IGetAllCompaniesSuccessData,
  ICompanyParsed,
  ICompanyRaw, ICompanyPayload
} from '@root/app/companies/companies.model';
import { companiesMock } from '@root/app/companies/companies.mock';
import { companyTypes } from '@root/app/companies/companies.constant';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private endpoint = `companies`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiAddOne(companyRaw: ICompanyPayload): Observable<any> {
    // console.log('apiAddOne:', companyRaw);
    // return of({
    //   company: companyRaw
    // })
    return this.httpService.post(`${this.endpoint}`, companyRaw)
      .pipe(
        map((data: IAddCompanySuccessData) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiUpdateOne(companyId: number, companyRaw: ICompanyPayload): Observable<any> {
    // console.log('apiUpdateCompany:', companyRaw);
    // return of({
    //   company: companyRaw
    // })
    const payload = { id: companyId, ...companyRaw };
    return this.httpService.put(`${this.endpoint}/${companyId}`, payload)
      .pipe(
        map((data: IAddCompanySuccessData) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiDeleteOne(companyId: number): Observable<any> {
    // console.log('apiDeleteOne:', companyRaw);
    // return of({
    //   company: {},
    // })
    return this.httpService.delete(`${this.endpoint}/${companyId}`)
      .pipe(
        map((data: any) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiGetOne(companyId: number): Observable<any> {
    // console.log('apiGetOne:', companyId);
    // return of({
    //   company: companiesMock[0],
    //   totalCount: 2000,
    // })
    return this.httpService.get(`${this.endpoint}/${companyId}`)
      .pipe(
        map((data: any) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    // return of({
    //   companies: companiesMock,
    //   totalCount: 2000,
    // })
    return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        map((data: IGetAllCompaniesSuccessData) => {
          data.companies = this.parseList(data.companies);
          return data;
        })
      );
  }

  parseList(companiesRaw: ICompanyRaw[]): ICompanyParsed[] {
    // console.log('parseList:', companiesRaw);
    return companiesRaw.map((companyRaw: ICompanyRaw) => this.parseOne(companyRaw));
  }

  parseOne(companyRaw: ICompanyRaw): ICompanyParsed {
    // console.log('parseOne:', companyRaw);
    const company = Object.assign({
      customType: '',
      customPersons: '',
    }, companyRaw);

    company.customType = companyTypes[company.type];
    company.customPersons = company.persons[0].phone.join('<br>');

    return company;
  }
}
