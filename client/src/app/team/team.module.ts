import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { TeamRoutingModule } from './team-routing.module';

import { TeamComponent } from './team.component';

@NgModule({
  declarations: [
    TeamComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    TeamRoutingModule
  ]
})
export class TeamModule { }
