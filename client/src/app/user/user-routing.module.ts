import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';

// import { UserHeaderComponent } from 'components/user-header/user-header.component';
// import { UserFooterComponent } from 'components/user-footer/user-footer.component';

const children: Routes = [
  // { path: '', redirectTo: '/user/dashboard' }, // auto takes to dashboard pages
  { path: '', redirectTo: '/user/products' }, // auto takes to products page
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'products', component: ProductsComponent, },
];

const routes: Routes = [
  // { path: '', component: UserHeaderComponent, outlet: 'header' },
  // { path: '', component: UserFooterComponent, outlet: 'footer' },

  { path: '', component: UserComponent, children: children }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
