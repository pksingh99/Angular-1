import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass-parameters',
  templateUrl: './pass-parameters.component.html',
  styleUrls: ['./pass-parameters.component.css']
})
export class PassParametersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  Params: any = null;
  id: any = null;
  name: any = null;
  ngOnInit() {
    //since it returns observable we are subscribing to it....
    this.route.params.subscribe(
      (params) => {
        this.id = params["id"];
        this.name = params["name"];
        console.log(params);
      }
    );
  }

}
