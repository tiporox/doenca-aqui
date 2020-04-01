import { Component, ViewChild, OnInit } from '@angular/core';
import { AgmMap, MapsAPILoader } from "@agm/core";
import { NbDialogService } from '@nebular/theme';
import { NovaOcorrenciaComponent } from '../nova-ocorrencia-popup/index.component';
import { GoogleMapsService } from '../../../@core/utils/google.maps.service';



const casosRegistradosAgrupadosCEP = [
  {
    location : {
      rua: "Rua Araci Ribeiro de Tolêdo",
      cep: "06763-050",
      estado: "São Paulo",
      cidade: "Taboão da Serra",
      bairro: "Chácara Agrindus",
      lat: -23.5728517 , 
      lng: -46.8939375
    },
    doenca : "COVID-19",
    ocorrencias : 2
  },
  {
    location : {
      rua: "Rua Araci Ribeiro de Tolêdo",
      cep: "06763-050",
      estado: "São Paulo",
      cidade: "Taboão da Serra",
      bairro: "Chácara Agrindus",
      lat: -23.6115844 , 
      lng: -46.7640386
    },
    doenca : "COVID-19",
    ocorrencias : 5
  },
  {
    location : {
      rua: "R. Orestes Balarine",
      cep: "05576-100",
      estado: "São Paulo",
      cidade: "Taboão da Serra",
      bairro: "Chácara Agrindus",
      lat: -23.6119043, 
      lng: -46.7644741
    },
    doenca : "COVID-19",
    ocorrencias : 12
  },
  {
    location : {
      rua: "Rua Fernando Nobre",
      cep: "06705-490",
      estado: "São Paulo",
      cidade: "Cotia",
      bairro: "Parque Rincao",
      lat: -23.5693631, 
      lng: -46.8800399
    },
    doenca : "COVID-19",
    ocorrencias : 12
  }  
]


@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
  
    <nb-card style="height:100%" >
      <nb-card-header>
        <span class="label-card">Mapa <span class="hiden-465">de</span> Relatos</span>
        <button nbButton status="primary" (click)="novaOcorrencia()" size="small" class="size-small float-right bt-acao" >
            <nb-icon icon="plus"></nb-icon>
            <span class="hiden-465">Novo&nbsp;</span>
            Relato
        </button>
      </nb-card-header>
      <nb-card-body>
       
        <agm-map   #agmMap [latitude]="lat" [longitude]="lng" [zoom]="zoom" [streetViewControl]="false"  (mapReady)="mapLoad($event)" >
          <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
          <agm-marker *ngFor="let m of markers"
            (markerClick)="markerClicked(m, $event)" 
            [latitude]="m.location.lat" 
            [longitude]="m.location.lng"
            [iconUrl]="m.icon"
            >
            <agm-info-window 
              [isOpen]="isInfoWindowOpen(m.id)"
              [latitude]="m.location.lat" 
              [longitude]="m.location.lng">
                <b>Rua:</b> {{m.location.rua}} <br/>
                <b>Cep:</b> {{m.location.cep}} <br/>
                <b>Qtd de pessoas que relataram:</b> {{m.ocorrencias}}<br/>
            </agm-info-window>
          </agm-marker>

        </agm-map>
      </nb-card-body>
    </nb-card>
    <div class="legenda" >
        <img src="./assets/alert-1.svg" width="16" /> 
        <span class="web">1 - 2 pessoas relataram casos neste cep</span> 
        <span class="mobile-1">1 - 2 relatos informados</span> <br/>

        <img src="./assets/alert-2.svg" width="16" />
        <span class="web">3 - 5 pessoas relataram casos neste cep</span> 
        <span class="mobile-1">3 - 5 relatos informados</span> <br/>

        <img src="./assets/alert-3.svg" width="16" />
        <span class="web">6 - N pessoas relataram casos neste cep</span> 
        <span class="mobile-1">6 - N relatos informados</span> <br/>
    </div>
  `,
})
export class GmapsComponent implements OnInit {

  map = null;
  lat = 0;
  lng = 0;
  zoom = 16;
  markers = [];
  openedWindow : number = -1; 
  @ViewChild(AgmMap, {static: true}) agmMap;
  public static googleMapsServiceRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private dialogService: NbDialogService,
    private googleMapsService: GoogleMapsService,

  ){
    this.mapsAPILoader.load().then((result) => { 
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(position.coords.latitude, position.coords.longitude);
          this.getCep();
        });
      } 
  
    });
  }

  novaOcorrencia() {
    this.dialogService.open(NovaOcorrenciaComponent)
      .onClose.subscribe(result => {
        
      });
  }

  ngOnInit() {

    console.log(this.agmMap);

    casosRegistradosAgrupadosCEP.forEach( (item, i) => {

      item["id"] = i;
      item["icon"] =  {
        url: (item.ocorrencias < 3)? "./assets/alert-1.svg" :  (item.ocorrencias <= 5)?  "./assets/alert-2.svg" :  "./assets/alert-3.svg" ,
        scaledSize: {
            width: 40,
            height: 40
        }
      };

      this.markers.push(item);
    });

    
    window["mapsX"] = this.agmMap;

  
  }

  protected mapLoad(map) {
    this.renderGeolocationControl(map);
  }

  renderGeolocationControl(map) {

  }

  getCep() {
    // var latlng = new google.maps.LatLng(this.lat, this.lng );
    // var geocoder = geocoder = new google.maps.Geocoder();
    //   geocoder.geocode({ 'latLng': latlng }, function (results, status) {
    //       if (status == google.maps.GeocoderStatus.OK) {
    //           if (results[1]) {
    //               alert("Location: " + results[1].formatted_address);
    //               console.log("results", results);
    //               console.log("results", results[1].geometry.location.lat(), results[1].geometry.location.lng());

    //               this.markers.push(
    //                 {
    //                   id: 5,
    //                   lat: results[1].geometry.location.lat(), 
    //                   lng: results[1].geometry.location.lng(), 
    //                   cep: "",
    //                   casos : {
    //                     suspeitos: 2,
    //                     confirmados: 1
    //                   },
    //                   icon: {
    //                     url: "./assets/virus.svg",
    //                     scaledSize: {
    //                         width: 50,
    //                         height: 50
    //                     }
    //                   }
    //                 }
    //               );
    //           }
    //       }
    //   });
   }

  markerClicked(maker, $event) {
    console.log(maker, $event)
    this.openWindow(maker.id);
  }

  openWindow(id) {
    this.openedWindow = id; // alternative: push to array of numbers
  }

  isInfoWindowOpen(id) {
    return this.openedWindow == id; // alternative: check if id is in array
  }

}

var novoCaso = [
  {
    idUsuario: "<fecebook id user>",
    dataRegistro: "<date time cadastro>",
    doenca: "COVID-19",
    tipo: "VIRUS",
    local: {
      rua: "Rua Araci Ribeiro de Tolêdo",
      cep: "06763-050",
      estado: "São Paulo",
      cidade: "Taboão da Serra",
      bairro: "Chácara Agrindus",
      lat: -23.5728517 , 
      lng: -46.8939375
    },
    status: "SUSPEITA"
  },
  {
    idUsuario: "<fecebook id user>",
    dataRegistro: "<date time cadastro>",
    doenca: "COVID-19",
    tipo: "VIRUS",
    local: {
      rua: "Rua Araci Ribeiro de Tolêdo",
      cep: "06763-050",
      estado: "São Paulo",
      cidade: "Taboão da Serra",
      bairro: "Chácara Agrindus",
      lat: -23.6115844  , 
      lng: -46.7640386
    },
    status: "CONFIRMADO"
  }
]
