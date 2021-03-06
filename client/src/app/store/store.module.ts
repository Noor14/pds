import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';

import { AddUpdateSearchStoreComponent } from './components/add-update-search-store/add-update-search-store.component';
import { StoresComponent } from './stores.component';


@NgModule({
  declarations: [
    StoresComponent,
    AddUpdateSearchStoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    StoreRoutingModule
  ]
})
export class StoreModule { }
