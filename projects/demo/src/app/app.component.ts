import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IData } from './IData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  initialAValue: IData = {
    defaultArray: this.numberArray,
    selectedValue: []
  };
  initialBValue: IData = {
    defaultArray: [],
    selectedValue: []
  };

  form?: FormGroup = new FormGroup({
    one: new FormControl(this.initialAValue),
    two: new FormControl(this.initialBValue),
  });

  constructor() {
    this.form = new FormGroup({
      one: new FormControl(this.initialAValue),
      two: new FormControl(this.initialBValue),
    });
    this.resetValues();
  }

  ngOnInit(): void {

  }
  resetValues() {
    this.initialAValue = {
      defaultArray: this.numberArray,
      selectedValue: []
    };
    this.initialBValue = {
      defaultArray: [],
      selectedValue: []
    };
  }

  onSubmit() {
    //push selected items from A->B
    this.initialBValue.defaultArray = [
      ...this.form.controls.one.value.selectedValue,
      ...this.initialBValue.defaultArray];

    this.form.controls.one.value.selectedValue.forEach((element: any) => {
      var index = this.form.controls.one.value.defaultArray.indexOf(element);
      if (index !== -1) {
        this.form.controls.one.value.defaultArray.splice(index, 1);
      }
    });
    this.form.controls.one.value.selectedValue = [];

    //push selected items from B->A
    this.initialAValue.defaultArray = [...this.form.controls.two.value.selectedValue, ...this.initialAValue.defaultArray];
    this.form.controls.two.value.selectedValue.forEach((element: any) => {
      var index = this.form.controls.two.value.defaultArray.indexOf(element);
      if (index !== -1) {
        this.form.controls.two.value.defaultArray.splice(index, 1);
      }
    });
    this.form.controls.two.value.selectedValue = [];

    this.form = new FormGroup({
      one: new FormControl(this.initialAValue),
      two: new FormControl(this.initialBValue),
    });

  }
}
