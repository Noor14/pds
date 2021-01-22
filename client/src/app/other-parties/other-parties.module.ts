import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { OtherPartiesRoutingModule } from './other-parties-routing.module';

import { OtherPartiesComponent } from './other-parties.component';
import { CompaniesComponent } from '../companies/companies.component';
import { WholesalersComponent } from '../wholesalers/wholesalers.component';
import { AddUpdateSearchCompanyComponent } from '../companies/components/add-update-search-company/add-update-search-company.component';
import { AddUpdateSearchWholesalerComponent } from '../wholesalers/components/add-update-search-wholesaler/add-update-search-wholesaler.component';
import { AreasComponent } from '../areas/areas.component';
import { AddUpdateSearchAreaComponent } from '../areas/components/add-update-search-area/add-update-search-area.component';


@NgModule({
  declarations: [
    OtherPartiesComponent,
    CompaniesComponent,
    WholesalersComponent,
    AddUpdateSearchCompanyComponent,
    AddUpdateSearchWholesalerComponent,
    AreasComponent,
    AddUpdateSearchAreaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    OtherPartiesRoutingModule,
  ]
})
export class OtherPartiesModule { }
