import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

import { areasRawMock } from '../areas.mock';
import {
  IAddUpdateAreaSuccessData,
  IAreaParsed,
  IAreaRaw,
  IGetAllAreasSuccessData,

} from '../areas.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private endpoint = `areas`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiAddOne(areaRaw: IAreaRaw): Observable<any> {
    // console.log('apiAddOne:', areaRaw);

    return this.httpService.post(`${this.endpoint}`, areaRaw)
      .pipe(
        map((data: IAddUpdateAreaSuccessData) => {
          data.area = this.parseOne(data.area);
          return data;
        })
      );
  }

  apiUpdateOne(areaRaw: IAreaRaw): Observable<any> {
    // console.log('apiUpdateArea:', areaRaw);

    return this.httpService.put(`${this.endpoint}/${areaRaw.id}`, areaRaw)
      .pipe(
        map((data: IAddUpdateAreaSuccessData) => {
          data.area = this.parseOne(data.area);
          return data;
        })
      );
  }

  apiDeleteOne(areaRaw: IAreaRaw): Observable<any> {
    // console.log('apiDeleteOne:', areaRaw);

    return this.httpService.delete(`${this.endpoint}/${areaRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.area = this.parseOneArea(data.area);
          return data;
        })
      );
  }

  apiGetOne(areaId: string): Observable<any> {
    // console.log('apiGetOne:', areaId);

    return this.httpService.delete(`${this.endpoint}/${areaId}`)
      .pipe(
        map((data: any) => {
          data.area = this.parseOne(data.area);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return of({
      areas: areasRawMock,
      totalCount: 2000,
    })
    // return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        map((data: IGetAllAreasSuccessData) => {
          data.areas = this.parseList(data.areas);
          return data;
        })
      );
  }

  parseList(areasRaw: IAreaRaw[]): IAreaParsed[] {
    // console.log('parseList:', areasRaw);
    return areasRaw.map((areaRaw: IAreaRaw) => this.parseOne(areaRaw));
  }

  parseOne(areaRaw: IAreaRaw): IAreaParsed {
    // console.log('parseOne:', areaRaw);
    const area = Object.assign({
      customCityName: '',
    }, areaRaw);

    area.customCityName = '';

    return area;
  }
}
