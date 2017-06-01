import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  request: any;

  initialValue: number = 0;
  red: number = this.initialValue;
  green: number = this.initialValue;
  blue: number = this.initialValue;

  private url = 'https://api.particle.io/v1/devices/1f0043000247343138333038/led';

  constructor(public navCtrl: NavController, public http: Http) {}

  sendData(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer aad45faf1c7af643d5fb9d87a399fba2ddf9e449')
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);

     this.http.post(this.url, { data }, options)
      .subscribe({ error: e => console.error(e) });

    // console.log(data);
    // console.log(body);
  }


}
