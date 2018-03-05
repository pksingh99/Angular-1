import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-forobservable',
  templateUrl: './forobservable.component.html',
  styleUrls: ['./forobservable.component.css']
})
export class ForobservableComponent implements OnInit {
  public list = [];
  constructor(private _service: NewserviceService) { }
  public help: any = [];
  ngOnInit() {
    this._service.getStore()
      .subscribe(data => this.list = data);
    console.log(this._service);

    Observable.range(0, 9)
      .map(e => e * 2)
      .map(e => e + 7)
      .scan((count) => count + 1, 0)
      .subscribe(count => {
        this.help[count] = count
      });
  }


}
