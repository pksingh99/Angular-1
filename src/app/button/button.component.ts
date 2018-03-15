import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy():void{
    console.log("Des")
  }
}
