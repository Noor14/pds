import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

// import { PublicHeaderComponent } from 'components/public-abstract-header/public-abstract-header.component';
// import { PublicFooterComponent } from 'components/public-abstract-footer/public-abstract-footer.component';

const children: Routes = [
  { path: '', component: LandingPageComponent, },
  { path: 'partners', component: PartnersComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent, },
];

const routes: Routes = [
  // { path: '', component: PublicHeaderComponent, outlet: 'header' },
  // { path: '', component: PublicFooterComponent, outlet: 'footer' },

  { path: '', component: PublicComponent, children: children }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAbstractRoutingModule { }
