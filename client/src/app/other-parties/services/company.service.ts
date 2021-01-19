import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import { ECRUDModalModes, IGetAllCompanySuccessData } from '@root/app/other-parties/other-parties.model';
import { companiesMock } from '@root/app/other-parties/components/companies/companies.mock';
import {
  IAddUpdateSearchCompanyConfig,
  ICompanyParsed, ICompanyRaw
} from '@root/app/other-parties/components/companies/companies.model';
import { AddUpdateSearchCompanyComponent } from '@root/app/other-parties/components/add-update-search-company/add-update-search-company.component';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  endpoint = 'companies';
  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiFetchCompanies(): Observable<any> {

    // TODO implement http service call here.
    // const subscription = this.httpService.get();

    // use mock data for now
    const subscription = of({
      data: {
        company: companiesMock,
        totalCount: 2000,
      }
    });

    // return subscription
    //   .pipe(
    //     map((res: IGetAllCompanySuccessData) => {
    //       let company = res.data.company;
    //       return {
    //         company: this.parseCompany(company),
    //         totalCount: res.data.totalCount,
    //       };
    //     })
    //   );
  }

  parseCompany(companyRaw: ICompanyRaw[]): ICompanyParsed[] {
    const companies: ICompanyParsed[] = [];
    let company: ICompanyParsed;
    companyRaw.forEach((data: ICompanyRaw) => {
      company = Object.assign({
        // foo: 0,
      }, data);
      companies.push(company);
    });

    return companies;
  }

  private addUpdateSearchCompany(config: IAddUpdateSearchCompanyConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchCompanyComponent, config, { class: 'modal-lg' });
  }

  openEditCompany(companyData: ICompanyParsed): EventEmitter<any> {
    const config: IAddUpdateSearchCompanyConfig = {
      mode: ECRUDModalModes.Edit,
      company: companyData
    };

    return this.addUpdateSearchCompany(config);
  }
}
