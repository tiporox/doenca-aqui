import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import {
   NbCardModule ,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbDialogModule,
  NbWindowModule,
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule, 
  NbInputModule,
  NbRadioModule,
  NbUserModule,  
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MapsRoutingModule, routedComponents, ENTRY_COMPONENTS } from './index-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXgYgpza0iG9x-f8SOjvJUuECd85upABI',
      libraries: ['places'],
    }),
    LeafletModule.forRoot(),
    MapsRoutingModule,
    NgxEchartsModule,
    NbCardModule ,
    NbButtonModule,
    NbSelectModule,
    NbActionsModule,
    NbCheckboxModule,
    NbDatepickerModule, 
    NbInputModule,
    NbRadioModule,
    NbUserModule,  
    NbIconModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
  exports: [
    ...ENTRY_COMPONENTS
  ],
  declarations: [
    ...routedComponents,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ]
})
export class MapaCasosModule { }
