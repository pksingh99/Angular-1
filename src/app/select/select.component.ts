import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fruitselected = "";
  fruits = [
    { value: '0', viewValue: 'Mango' },
    { value: '1', viewValue: 'Orange' },
    { value: '2', viewValue: 'Apple' }
  ];
}
