import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './index.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { NovaOcorrenciaComponent } from './nova-ocorrencia-popup/index.component';
const routes: Routes = [{
  path: '',
  component: MapsComponent,
  children: [
    {
      path: '',
      component: GmapsComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }

export const routedComponents = [
  MapsComponent,
  GmapsComponent,
  NovaOcorrenciaComponent
];

export const ENTRY_COMPONENTS = [
  NovaOcorrenciaComponent,
];