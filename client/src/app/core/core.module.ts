import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { httpInterceptorProviders } from '@root/app/core/interceptors';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders,
  ],
})
export class CoreModule { }
