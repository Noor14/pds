import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TeamRoutingModule } from './team-routing.module';

import { TeamComponent } from './team.component';
import { AddUpdateSearchUserComponent } from '@shared/components/add-update-search-user/add-update-search-user.component.ts'

@NgModule({
  declarations: [
    TeamComponent,
    AddUpdateSearchUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
