import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.random();
  }
  public rand: number;
  public guessrand: number;
  public message: string;
  public limit: number = 10;
  public attempts: number = 0;
  public greet: string = "";
  public view: number = 0;
  random() {
    this.rand = Math.floor((Math.random() * this.limit) + 1);
  }

  playagain() {
    this.rand = this.guessrand = this.attempts = 0;
    this.message = this.greet = "";
    this.random();
  }
  check() {
    if ((!isNaN(this.guessrand))) {
      this.message = "";
      this.attempts = this.attempts + 1;

      if (this.attempts < 6) {
        if (this.rand == this.guessrand) {
          if (this.attempts == 1) {
            this.greet = "Awesome !!";
          }
          if (this.attempts == 2) {
            this.greet = "Awesome !!";
          }
          if (this.attempts == 3) {
            this.greet = "Great !!";
          }
          if (this.attempts = 4) {
            this.greet = "Good !!";
          }
          if (this.attempts >= 5) {
            this.greet = "nice !!";
          }
          this.message = "You Won !!";
          this.openSnackBar("You Won.", this.greet);
          this.view = 2;
        }




        if (this.rand > this.guessrand) {
          this.message = "Number Is More than " + this.guessrand;
          this.openSnackBar("Number Is More than " + this.guessrand, this.attempts + "");

        }


        if (this.rand < this.guessrand) {
          this.message = "Number Is Less than " + this.guessrand;
          this.openSnackBar("Number Is Less than " + this.guessrand, this.attempts + "");

        }
      }
      else {
        this.message = "You Lost. The Number was " + this.rand;
        this.openSnackBar("You Lost.", "Good Luck");
        this.view = 2;
      }
    }
    else {
      this.message = "Please Enter Number less than limit entered";
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
// app-apple is the selector
// give it some secondssss
