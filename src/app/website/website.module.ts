import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

import { WebsiteRoutingModule } from './website-routing.module';

import { WebsiteComponent } from './website.component';

@NgModule({
  declarations: [WebsiteComponent],
  imports: [CommonModule, TuiLinkModule, TuiButtonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
