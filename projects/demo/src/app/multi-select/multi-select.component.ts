import { Component, forwardRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements OnInit, ControlValueAccessor {

  onChange: any = (newValue: any) => {
    console.log(newValue);

  };
  onTouched: any = () => { };
  disabled = false;

  @Input('initialAValue') _value = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this);
    })
  }

  writeValue(value: any): void {
    this._value = { ...value };
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get value() {
    return this._value;
  }

  handleClick(value: any) {
    // this._value.selectedValue
    this._value?.defaultArray.findIn
    if (this._value?.selectedValue.indexOf(value) == -1) {
      this._value?.selectedValue.push(value);
    } else {
      this._value?.selectedValue.includes(value) && this._value?.selectedValue.splice(this._value?.selectedValue.indexOf(value), 1)
    }
  }

}
