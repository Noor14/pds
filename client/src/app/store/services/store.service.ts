import { EventEmitter, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

import {
  IAddStoreSuccessData,
  IGetAllStoresSuccessData,
  IStoreParsed,
  IStoreRaw
} from '../stores.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private endpoint = `stores`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) {
  }

  apiAddOne(storeRaw: IStoreRaw): Observable<any> {
    // console.log('apiAddOne:', storeRaw);

    return this.httpService.post(`${this.endpoint}`, storeRaw)
      .pipe(
        map((data: IAddStoreSuccessData) => {
          data.store = this.parseOne(data.store);
          return data;
        })
      );
  }

  apiUpdateOne(storeRaw: IStoreRaw): Observable<any> {
    // console.log('apiUpdateStore:', storeRaw);

    return this.httpService.post(`${this.endpoint}/${storeRaw.id}`, storeRaw)
      .pipe(
        map((data: IAddStoreSuccessData) => {
          data.store = this.parseOne(data.store);
          return data;
        })
      );
  }

  apiDeleteOne(storeRaw: IStoreRaw): Observable<any> {
    // console.log('apiDeleteOne:', storeRaw);

    return this.httpService.delete(`${this.endpoint}/${storeRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.store = this.parseOneStore(data.store);
          return data;
        })
      );
  }

  apiGetOne(storeId: string): Observable<any> {
    // console.log('apiGetOne:', storeId);

    return this.httpService.delete(`${this.endpoint}/${storeId}`)
      .pipe(
        map((data: any) => {
          data.store = this.parseOne(data.store);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        // Use Mock data until BE implements real data.
        // map((data: IGetAllStoresSuccessData) => {
        //   data.stores = data.stores.length ? data.stores : storesRawMock;
        //   return data;
        // }),

        map((data: IGetAllStoresSuccessData) => {
          data.stores = this.parseList(data.stores);
          return data;
        })
      );
  }

  parseList(storesRaw: IStoreRaw[]): IStoreParsed[] {
    // console.log('parseList:', storesRaw);
    return storesRaw.map((storeRaw: IStoreRaw) => this.parseOne(storeRaw));
  }

  parseOne(storeRaw: IStoreRaw): IStoreParsed {
    // console.log('parseOne:', storeRaw);
    const store = Object.assign({
      customAreaName: '',
      customPersons: '',
    }, storeRaw);

    store.customAreaName = ''; // TODO implement area name

    store.customPersons = '';

    return store;
  }
}
