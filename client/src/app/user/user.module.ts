import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StoresComponent } from './components/stores/stores.component';


@NgModule({
  declarations: [
    UserComponent,
    UserHeaderComponent,
    UserFooterComponent,
    DashboardComponent,
    ProductsComponent,
    OrdersComponent,
    StoresComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    UserRoutingModule
  ]
})
export class UserModule { }
