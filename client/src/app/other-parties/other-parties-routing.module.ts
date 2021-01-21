import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from '../companies/companies.component';
// import { WholesalersComponent } from './components/wholesalers/wholesalers.component';
import { OtherPartiesComponent } from './other-parties.component';
import { AreasComponent } from '../areas/areas.component';

const children: Routes = [
  { path: '', redirectTo: 'companies' },
  { path: 'companies', component: CompaniesComponent },
  // { path: 'wholesalers', component: WholesalersComponent },
  { path: 'areas', component: AreasComponent },
];

const routes: Routes = [
  { path: '', component: OtherPartiesComponent, children: children},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPartiesRoutingModule { }
