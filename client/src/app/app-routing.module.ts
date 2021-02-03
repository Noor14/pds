import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('@root/app/public-abstract/public-abstracts.module').then(m => m.PublicAbstractsModule) },
  { path: 'app', loadChildren: () => import('@root/app/user-abstract/user-abstract.module').then(m => m.UserAbstractModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
