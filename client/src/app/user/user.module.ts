import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UsersComponent } from './users.component';
import { AddUpdateSearchUserComponent } from '@shared/components/add-update-search-user/add-update-search-user.component.ts'

@NgModule({
  declarations: [
    UsersComponent,
    AddUpdateSearchUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
