import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPartiesRoutingModule } from './other-parties-routing.module';
import { OtherPartiesComponent } from './other-parties.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { WholesalersComponent } from './components/wholesalers/wholesalers.component';


@NgModule({
  declarations: [OtherPartiesComponent, CompaniesComponent, WholesalersComponent],
  imports: [
    CommonModule,
    OtherPartiesRoutingModule
  ]
})
export class OtherPartiesModule { }
