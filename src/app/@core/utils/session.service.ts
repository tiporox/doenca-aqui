import { Injectable, OnDestroy } from '@angular/core';


@Injectable()
export class SessionService {

  private data = {};

  public put(key: string, value: any) {
    this.data[key] = value;
  }

  public get(key: string) {
    return this.data[key];
  }

  public destroy() {
    this.data = {};
  }


}
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY