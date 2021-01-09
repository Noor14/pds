import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductComponent } from './product.component';
import { AddUpdateSearchProductComponent } from './components/add-update-search-product/add-update-search-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    AddUpdateSearchProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
