import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { MyContractsRoutingModule } from './my-contracts-routing.module';
import { MyContractsComponent } from './my-contracts.component';


@NgModule({
  declarations: [
    MyContractsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    MyContractsRoutingModule
  ]
})
export class MyContractsModule { }
