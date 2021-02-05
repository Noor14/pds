import { EventEmitter, Injectable } from '@angular/core';
import { ECRUDModalModes, IAddUpdateSearchDoctorConfig, IDoctorParsed } from '../doctors.model';
import { AddUpdateSearchDoctorComponent } from '../components/add-update-search-doctor/add-update-search-doctor.component';
import { UtilService } from '@shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorModalsService {

  constructor(
    private utilService: UtilService,
  ) { }

  private addUpdateSearchDoctor(config: IAddUpdateSearchDoctorConfig): EventEmitter<any> {
    return this.utilService.modal(AddUpdateSearchDoctorComponent, config, { class: 'modal-lg' });
  }

  // openSearchDoctor(): EventEmitter<any> {
  //   const config: IAddUpdateSearchDoctorConfig = {
  //     mode: ECRUDModalModes.Search,
  //     doctor: null
  //   };
  //
  //   return this.addUpdateSearchDoctor(config);
  // }

  openAddDoctor(): EventEmitter<any> {
    const config: IAddUpdateSearchDoctorConfig = {
      mode: ECRUDModalModes.Add,
      doctor: null
    };

    return this.addUpdateSearchDoctor(config);
  }

  openEditDoctor(doctor: IDoctorParsed): EventEmitter<any> {
    const config: IAddUpdateSearchDoctorConfig = {
      mode: ECRUDModalModes.Edit,
      doctor: doctor
    };

    return this.addUpdateSearchDoctor(config);
  }

}
