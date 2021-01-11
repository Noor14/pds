import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyContractsComponent } from './my-contracts.component';

const routes: Routes = [
  { path: '', component: MyContractsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyContractsRoutingModule { }
