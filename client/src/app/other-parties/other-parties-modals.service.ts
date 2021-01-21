import { EventEmitter, Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { ECRUDModalModes, IAddUpdateSearchCompanyConfig, ICompanyParsed } from '@root/app/other-parties/components/companies/companies.model';
import { AddUpdateSearchCompanyComponent } from '@root/app/other-parties/components/add-update-search-company/add-update-search-company.component';
import { AddUpdateSearchAreaComponent } from '@root/app/other-parties/components/add-update-search-area/add-update-search-area.component';
import { IAddUpdateSearchAreaConfig, IAreaParsed } from '@root/app/other-parties/components/areas/areas.model';

@Injectable({
  providedIn: 'root'
})
export class OtherPartiesModalsService {

  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchCompany(config: IAddUpdateSearchCompanyConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchCompanyComponent, config, { class: 'modal-lg' });
  }

  // openSearchCompany(): EventEmitter<any> {
  //   const config: IAddUpdateSearchCompanyConfig = {
  //     mode: ECRUDModalModes.Search,
  //     company: null
  //   };
  //
  //   return this.addUpdateSearchCompany(config);
  // }

  openAddCompany(): EventEmitter<any> {
    const config: IAddUpdateSearchCompanyConfig = {
      mode: ECRUDModalModes.Add,
      company: null
    };

    return this.addUpdateSearchCompany(config);
  }

  openEditCompany(company: ICompanyParsed): EventEmitter<any> {
    const config: IAddUpdateSearchCompanyConfig = {
      mode: ECRUDModalModes.Edit,
      company: company
    };

    return this.addUpdateSearchCompany(config);
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
