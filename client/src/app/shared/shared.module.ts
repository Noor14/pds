import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { TableComponent } from './components/table/table.component';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { LoginComponent } from './components/login/login.component';
import { AddUpdateSearchUserComponent } from './components/add-update-search-user/add-update-search-user.component';

@NgModule({
  providers: [
    PaginationConfig
  ],
  declarations: [
    TableComponent,
    AlertComponent,
    ConfirmComponent,
    LoginComponent,
    AddUpdateSearchUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgxDatatableModule,

    /* Bootstrap specific components/modules - we do not import whole bootstrap module - keep adding what is needed. */
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
  ],
  exports: [
    /* components */
    TableComponent,
    AddUpdateSearchUserComponent,

    AlertComponent,
    ConfirmComponent,

    /* modules */
    FormsModule,
    FontAwesomeModule,
    NgxDatatableModule,

    CollapseModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    PaginationModule,
    AlertModule,
  ],
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIconPacks(fas, far, fab);
  }
}
