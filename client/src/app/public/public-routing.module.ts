import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

// import { HeaderComponent } from 'components/header/header.component';
// import { FooterComponent } from 'components/footer/footer.component';

const children: Routes = [
  { path: '', component: LandingPageComponent, },
  { path: 'partners', component: PartnersComponent, },
  { path: 'about', component: AboutComponent, },
  { path: 'contact', component: ContactComponent, },
];

const routes: Routes = [
  // { path: '', component: HeaderComponent, outlet: 'header' },
  // { path: '', component: FooterComponent, outlet: 'footer' },

  { path: '', component: PublicComponent, children: children }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
