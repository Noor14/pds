import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from './components/companies/companies.component';
import { WholesalersComponent } from './components/wholesalers/wholesalers.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/companies' },
  { path: 'companies', component: CompaniesComponent },
  { path: 'wholesalers', component: WholesalersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPartiesRoutingModule { }
