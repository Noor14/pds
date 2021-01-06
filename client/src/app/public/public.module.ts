import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PartnersComponent } from './components/partners/partners.component';


@NgModule({
  declarations: [
    PublicComponent,
    PublicHeaderComponent,
    PublicFooterComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    PartnersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    PublicRoutingModule,
  ],
  exports: [],
})
export class PublicModule { }
