import { CommonModule } from '@angular/common';
import { Component, OnInit, effect } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../Services/shared.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  updateTravelOrder(arg0: FormGroup) {
    throw new Error('Method not implemented.');
  }
  formType: string = '';
  formFunction: string = '';
  formValue: object = {};
  BaseForm: FormGroup = new FormGroup({});
  constructor(private SharedSrv: SharedService) {
    this.formType = SharedSrv.formType();
    this.formFunction = SharedSrv.formFunction();
    this.formValue = SharedSrv.formValue();
    console.log('Testing');
    console.log(this.formType, this.formFunction, this.formValue);
  }

  ngOnInit() {
    switch (this.formType) {
      case 'Driver':
        break;
      case 'Vehicle':
        break;
      case 'Order':
        break;
      default:
        break;
    }
    switch (this.formFunction) {
      case 'Add':
        break;
      case 'Edit':
        break;
      default:
        break;
    }
  }
  closeModal() {
    this.SharedSrv.formSwitch.set(false);
  }
}
