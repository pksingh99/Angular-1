import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forpipes',
  templateUrl: './forpipes.component.html',
  styleUrls: ['./forpipes.component.css']
})
export class ForpipesComponent implements OnInit {

  constructor() { }
  birthday: Date = null;
  money: number = 100;
  ngOnInit() {
    this.birthday = new Date(1991, 2, 24);
  }

}
