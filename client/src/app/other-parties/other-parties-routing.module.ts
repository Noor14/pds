import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from './components/companies/companies.component';
// import { WholesalersComponent } from './components/wholesalers/wholesalers.component';
import { OtherPartiesComponent } from './other-parties.component';

const children: Routes = [
  { path: '', redirectTo: 'companies' },
  { path: 'companies', component: CompaniesComponent },
  // { path: 'wholesalers', component: WholesalersComponent },
];

const routes: Routes = [
  { path: '', component: OtherPartiesComponent, children: children},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPartiesRoutingModule { }
