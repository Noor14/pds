import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';

// import { HeaderComponent } from 'components/header/header.component';
// import { FooterComponent } from 'components/footer/footer.component';

const children: Routes = [
  // { path: '', redirectTo: '/user/dashboard' }, // auto takes to dashboard pages
  { path: '', redirectTo: '/user/products' }, // auto takes to products page
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'products', component: ProductsComponent, },
];

const routes: Routes = [
  // { path: '', component: HeaderComponent, outlet: 'header' },
  // { path: '', component: FooterComponent, outlet: 'footer' },

  { path: '', component: UserComponent, children: children }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
