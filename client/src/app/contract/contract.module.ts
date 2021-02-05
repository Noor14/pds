import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ContractRoutingModule } from './contract-routing.module';

import { ContractsComponent } from './contracts.component';
import { AddUpdateSearchContractComponent } from './components/add-update-search-contract/add-update-search-contract.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    ContractsComponent,
    AddUpdateSearchContractComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    ContractRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ContractModule { }
