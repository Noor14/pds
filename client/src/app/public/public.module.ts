import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';

import { PublicComponent } from './public.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PartnersComponent } from './components/partners/partners.component';


@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    FooterComponent,
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
