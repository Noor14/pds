import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    UserRoutingModule
  ]
})
export class UserModule { }
