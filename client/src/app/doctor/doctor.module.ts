import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorComponent } from './doctor.component';
import { AddUpdateSearchDoctorComponent } from './components/add-update-search-doctor/add-update-search-doctor.component';


@NgModule({
  declarations: [
    DoctorComponent,
    AddUpdateSearchDoctorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    DoctorRoutingModule,
  ]
})
export class DoctorModule { }
