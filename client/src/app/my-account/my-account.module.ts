import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { MyAccountComponent } from './my-account.component';


@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    SharedModule,

    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
