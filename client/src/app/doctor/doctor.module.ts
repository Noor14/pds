import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorsComponent } from './doctors.component';
import { AddUpdateSearchDoctorComponent } from './components/add-update-search-doctor/add-update-search-doctor.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    DoctorsComponent,
    AddUpdateSearchDoctorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    DoctorRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DoctorModule { }
