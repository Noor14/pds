import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { HeaderComponent } from 'components/header/header.component';
// import { FooterComponent } from 'components/footer/footer.component';

const children: Routes = [
  { path: '', redirectTo: '/user/dashboard' },
  { path: 'dashboard', component: DashboardComponent, },
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
