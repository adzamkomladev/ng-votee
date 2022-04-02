import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'pricing',
        loadChildren: () =>
          import('./pricing/pricing.module').then((m) => m.PricingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
