import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UserAbstractRoutingModule } from './user-abstract-routing.module';

import { UserAbstractComponent } from './user-abstract.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';

@NgModule({
  declarations: [
    UserAbstractComponent,
    UserHeaderComponent,
    UserFooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    UserAbstractRoutingModule
  ]
})
export class UserAbstractModule { }
