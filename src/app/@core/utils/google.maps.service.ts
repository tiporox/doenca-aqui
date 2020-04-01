import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const GOOGLE_MAPS_KEY = 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY';
export const GOOGLE_MAPS_KEY_GEO_CODING = 'AIzaSyDXgYgpza0iG9x-f8SOjvJUuECd85upABI';

@Injectable()
export class GoogleMapsService {

  private urlGoogle = "https://maps.googleapis.com/maps/api/geocode/json?key=";
  private urlGoogleGeoCoding = this.urlGoogle + GOOGLE_MAPS_KEY_GEO_CODING;
  
  constructor(private http: HttpClient) { }

  public getEndereco(key: string) {
    return this.http.get(this.urlGoogleGeoCoding + "&address=" + key);

  }

}