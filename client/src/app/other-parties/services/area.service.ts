import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { areasRawMock } from '../components/areas/areas.mock';
import {
  ECRUDModalModes,
  IAddUpdateSearchAreaConfig,
  IArea,
  IAreaRaw,
  IAreaResponseSuccess
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
      data: {
        areas: areasRawMock,
        totalCount: 2000,
      }
    });

    return subscription
      .pipe(
        map((res: IAreaResponseSuccess) => {
          let areasRaw = res.data.areas;

          // for sample mock data. -  to see pagination in action.
          // for (let i = 0; i < 5; i++) {
          //   areasRaw = areasRaw.concat(areasRaw);
          // }

          return {
            areas: this.parseAreas(areasRaw),
            totalCount: res.data.totalCount,
          };
        })
      );
  }

  parseAreas(areasRaw: IAreaRaw[]): IArea[] {
    const areas: IArea[] = [];
    let area: IArea;
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

  openEditArea(area: IArea): EventEmitter<any> {
    const config: IAddUpdateSearchAreaConfig = {
      mode: ECRUDModalModes.Edit,
      area: area
    };

    return this.addUpdateSearchArea(config);
  }
}
