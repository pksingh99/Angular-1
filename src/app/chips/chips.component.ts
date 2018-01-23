import { Component, OnInit } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  public bidlist: string = "";
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    this.bidlist = "";
    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    for (var key in this.fruits) {
      if (this.fruits.hasOwnProperty(key)) {
        console.log(key + " -> " + this.fruits[key]['name']);
        this.bidlist = this.bidlist + "," + this.fruits[key]['name'];
      }
    }
    this.bidlist = this.bidlist.replace(",", "");
    console.log(this.bidlist);
  }

  remove(fruit: any): void {
    this.bidlist = "";

    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
    console.log(this.fruits);
    for (var key in this.fruits) {
      if (this.fruits.hasOwnProperty(key)) {
        console.log(key + " -> " + this.fruits[key]['name']);
        this.bidlist = this.bidlist + "," + this.fruits[key]['name'];
      }
    }
    this.bidlist = this.bidlist.replace(",", "");
    console.log(this.bidlist);
  }
}
