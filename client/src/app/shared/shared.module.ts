import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    TableComponent
  ],
  imports: [
    CommonModule,

    /* Bootstrap specific components/modules - we do not import whole bootstrap module - keep adding what is needed. */
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    /* components */
    ItemsListComponent,
    TableComponent,

    /* modules */
    CollapseModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
})
export class SharedModule { }
