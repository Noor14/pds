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
  ICompanyRaw
} from '@root/app/companies/companies.model';
import { companiesMock } from '@root/app/companies/companies.mock';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private endpoint = `companies`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiAddOne(companyRaw: ICompanyRaw): Observable<any> {
    // console.log('apiAddOne:', companyRaw);
    return of({
      company: companyRaw
    })
    // return this.httpService.post(`${this.endpoint}`, companyRaw)
      .pipe(
        map((data: IAddCompanySuccessData) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiUpdateOne(companyRaw: ICompanyRaw): Observable<any> {
    // console.log('apiUpdateCompany:', companyRaw);
    return of({
      company: companyRaw
    })
    // return this.httpService.put(`${this.endpoint}/${companyRaw.id}`, companyRaw)
      .pipe(
        map((data: IAddCompanySuccessData) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiDeleteOne(companyRaw: ICompanyRaw): Observable<any> {
    // console.log('apiDeleteOne:', companyRaw);
    return of({
      company: companyRaw,
    })
    // return this.httpService.delete(`${this.endpoint}/${companyRaw.id}`)
      .pipe(
        map((data: any) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiGetOne(companyId: string): Observable<any> {
    // console.log('apiGetOne:', companyId);
    return of({
      company: companiesMock[0],
      totalCount: 2000,
    })
    // return this.httpService.get(`${this.endpoint}/${companyId}`)
      .pipe(
        map((data: any) => {
          data.company = this.parseOne(data.company);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return of({
      companies: companiesMock,
      totalCount: 2000,
    })
    // return this.httpService.get(`${this.endpoint}`, params)
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
      customPersons: '',
    }, companyRaw);

    // TODO implement
    company.customPersons = '';

    return company;
  }
}
