import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { areasRawMock } from '../components/areas/areas.mock';
import {
  ECRUDModalModes,
  IAddUpdateSearchAreaConfig,
  IAreaParsed,
  IAreaRaw,
  IGetAllAreasSuccessData
} from '../components/areas/areas.model';

import { AddUpdateSearchAreaComponent } from '../components/add-update-search-area/add-update-search-area.component';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(
    private utilService: UtilService,
  ) { }

  apiFetchAreas(): Observable<any> {

    // TODO implement http service call here.
    // const subscription = this.httpService.get();

    // use mock data for now
    const subscription = of({
      areas: areasRawMock,
      totalCount: 2000,
    });

    return subscription
      .pipe(
        map((data: IGetAllAreasSuccessData) => {
         data.areas = this.parseAreas(data.areas);
         return data;
        })
      );
  }

  parseAreas(areasRaw: IAreaRaw[]): IAreaParsed[] {
    const areas: IAreaParsed[] = [];
    let area: IAreaParsed;
    areasRaw.forEach((areaRaw: IAreaRaw) => {
      area = Object.assign({
        // foo: 0,
      }, areaRaw);
      areas.push(area);
    });

    return areas;
  }

  private addUpdateSearchArea(config: IAddUpdateSearchAreaConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchAreaComponent, config, { class: 'modal-sm' });
  }

  // openSearchArea(): EventEmitter<any> {
  //   const config: IAddUpdateSearchAreaConfig = {
  //     mode: ECRUDModalModes.Search,
  //     area: null
  //   };
  //
  //   return this.addUpdateSearchArea(config);
  // }

  openAddArea(): EventEmitter<any> {
    const config: IAddUpdateSearchAreaConfig = {
      mode: ECRUDModalModes.Add,
      area: null
    };

    return this.addUpdateSearchArea(config);
  }

  openEditArea(area: IAreaParsed): EventEmitter<any> {
    const config: IAddUpdateSearchAreaConfig = {
      mode: ECRUDModalModes.Edit,
      area: area
    };

    return this.addUpdateSearchArea(config);
  }
}
