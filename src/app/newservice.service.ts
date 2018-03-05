import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from './store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

let a$ = new Observable(a => {
  console.log(a);
});

import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/bufferCount"

Observable
  .interval(200)
  .take(9)
  .map(x => x + "!!!")
  .bufferCount(2)
  .subscribe(console.log);

a$.subscribe(v => {
  console.log(v);
}, b => {
  console.log(b);
}, function() {
  console.log("C");
});


@Injectable()
export class NewserviceService {

  constructor(public http: HttpClient) { }

  public _url = "/assets/store/store.json";

  getStore(): Observable<Store[]> {
    return this.http.get<Store[]>(this._url);
  }

  //a=  Observable.interval();
  //  hmm$ = new Subject<number>();
  //a$= this.hmm$.scan((ov,nv)=>ov+nv,0);
}
