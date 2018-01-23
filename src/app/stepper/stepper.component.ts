import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required] });
    this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', Validators.required] });
  }

}
