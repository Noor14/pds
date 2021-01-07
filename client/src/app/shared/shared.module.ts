import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { TableComponent } from './components/table/table.component';

@NgModule({
  providers: [
    PaginationConfig
  ],
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgxDatatableModule,

    /* Bootstrap specific components/modules - we do not import whole bootstrap module - keep adding what is needed. */
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  exports: [
    /* components */
    TableComponent,

    /* modules */
    FontAwesomeModule,
    NgxDatatableModule,

    CollapseModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    PaginationModule,
  ],
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far, fab);
  }
}
