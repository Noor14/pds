import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ContractRoutingModule } from './contract-routing.module';

import { ContractsComponent } from './contracts.component';
import { AddUpdateSearchContractComponent } from './components/add-update-search-contract/add-update-search-contract.component';


@NgModule({
  declarations: [
    ContractsComponent,
    AddUpdateSearchContractComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    ContractRoutingModule
  ]
})
export class ContractModule { }
