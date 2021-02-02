import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAbstractComponent } from './user-abstract.component';

// import { UserHeaderComponent } from 'components/user-abstract-header/user-abstract-header.component';
// import { UserFooterComponent } from 'components/user-abstract-footer/user-abstract-footer.component';

const children: Routes = [
  // { path: '', redirectTo: 'dashboard' }, // auto takes to dashboard pages
  { path: '', redirectTo: 'products' }, // auto takes to products page

  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'contracts', loadChildren: () => import('../contract/contract.module').then(m => m.ContractModule) },
  { path: 'orders', loadChildren: () => import('../order/order.module').then(m => m.OrderModule) },
  { path: 'products', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) },
  { path: 'stores', loadChildren: () => import('../store/store.module').then(m => m.StoreModule) },
  { path: 'doctors', loadChildren: () => import('../doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'other-parties', loadChildren: () => import('../other-parties/other-parties.module').then(m => m.OtherPartiesModule) },
  { path: 'my-contracts', loadChildren: () => import('../my-contracts/my-contracts.module').then(m => m.MyContractsModule) },
  { path: 'my-orders', loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersModule) },
  { path: 'my-account', loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'users', loadChildren: () => import('../user/user-routing.module').then(m => m.UserRoutingModule) },
];

const routes: Routes = [
  // { path: '', component: UserHeaderComponent, outlet: 'header' },
  // { path: '', component: UserFooterComponent, outlet: 'footer' },

  { path: '', component: UserAbstractComponent, children: children }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAbstractRoutingModule { }
