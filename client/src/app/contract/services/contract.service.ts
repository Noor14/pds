import { Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import {
  IAddUpdateContractSuccessData,
  IGetAllContractsSuccessData,
  IContractParsed,
  IContractRaw
} from '@root/app/contract/contracts.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private endpoint = `contracts`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) {
  }

  apiAddOne(contractRaw: IContractRaw): Observable<any> {
    // console.log('apiAddOne:', contractRaw);

    return this.httpService.post(`${this.endpoint}`, contractRaw)
      .pipe(
        map((data: IAddUpdateContractSuccessData) => {
          data.contract = this.parseOne(data.contract);
          return data;
        })
      );
  }

  apiUpdateOne(contractRaw: IContractRaw): Observable<any> {
    // console.log('apiUpdateContract:', contractRaw);

    return this.httpService.put(`${this.endpoint}/${contractRaw.id}`, contractRaw)
      .pipe(
        map((data: IAddUpdateContractSuccessData) => {
          data.contract = this.parseOne(data.contract);
          return data;
        })
      );
  }

  apiDeleteOne(contractRaw: IContractRaw): Observable<any> {
    // console.log('apiDeleteOne:', contractRaw);

    return this.httpService.delete(`${this.endpoint}/${contractRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.contract = this.parseOneContract(data.contract);
          return data;
        })
      );
  }

  apiGetOne(contractId: string): Observable<any> {
    // console.log('apiGetOne:', contractId);

    return this.httpService.delete(`${this.endpoint}/${contractId}`)
      .pipe(
        map((data: any) => {
          data.contract = this.parseOne(data.contract);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        map((data: IGetAllContractsSuccessData) => {
          data.contracts = this.parseList(data.contracts);
          return data;
        })
      );
  }

  parseList(contractsRaw: IContractRaw[]): IContractParsed[] {
    // console.log('parseList:', contractsRaw);
    return contractsRaw.map((contractRaw: IContractRaw) => this.parseOne(contractRaw));
  }

  parseOne(contractRaw: IContractRaw): IContractParsed {
    // console.log('parseOne:', contractRaw);
    const contract = Object.assign({
      customDoctorName: '',
      customDoctorContact: ''
    }, contractRaw);

    // TODO Implement these
    contract.customDoctorName = '';
    contract.customDoctorContact = '';

    return contract;
  }
}
