import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

// import { UserHeaderComponent } from 'components/user-header/user-header.component';
// import { UserFooterComponent } from 'components/user-footer/user-footer.component';

const children: Routes = [
  // { path: '', redirectTo: '/user/dashboard' }, // auto takes to dashboard pages
  // { path: '', redirectTo: '/user/products' }, // auto takes to products page

  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'doctors', loadChildren: () => import('../doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'products', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) },
  { path: 'stores', loadChildren: () => import('../store/store.module').then(m => m.StoreModule) },
  { path: 'other-parties', loadChildren: () => import('../other-parties/other-parties.module').then(m => m.OtherPartiesModule) },
  { path: 'orders', loadChildren: () => import('../order/order.module').then(m => m.OrderModule) },
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
