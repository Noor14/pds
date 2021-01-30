import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@core/public-abstracts.module').then(m => m.PublicAbstractsModule) },
  { path: 'user', loadChildren: () => import('@root/app/user-abstract/user-abstract.module').then(m => m.UserAbstractModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
