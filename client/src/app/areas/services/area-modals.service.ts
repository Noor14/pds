import { EventEmitter, Injectable } from '@angular/core';

import { UtilService } from '@shared/services/util.service';
import {
  ECRUDModalModes,
  IAddUpdateSearchAreaConfig,
  IAreaParsed
} from '@root/app/areas/areas.model';
import { AddUpdateSearchAreaComponent } from '@root/app/areas/components/add-update-search-area/add-update-search-area.component';

@Injectable({
  providedIn: 'root'
})
export class AreaModalsService {

  constructor(
    private utilService: UtilService,
  ) { }

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
