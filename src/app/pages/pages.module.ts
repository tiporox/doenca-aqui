import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SobreModule } from './sobre/index.module';
import { CasosReportadosModule } from './casos-reportados/index.module';
import { SairModule } from './sair/index.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    SobreModule,
    CasosReportadosModule,
    SairModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
