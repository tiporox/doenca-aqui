import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GoogleMapsService } from '../../../@core/utils/google.maps.service';
import { SessionService } from '../../../@core/utils/session.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'ngx-dialog-nova-ocorrencia',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.scss'],
})
export class NovaOcorrenciaComponent {

  constructor(
    public ref: NbDialogRef<NovaOcorrenciaComponent>,
    private googleMapsService: GoogleMapsService,
    private session: SessionService
    
    ) {}

  cancel() {
    this.ref.close();
  }

  submit(endereco) {
    this.googleMapsService.getEndereco(endereco).subscribe((result) => {
      console.log(result);
    });
  }
}
