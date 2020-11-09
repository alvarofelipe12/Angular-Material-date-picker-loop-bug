import { Component } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

/** @title Datepicker selected value */
@Component({
  selector: "datepicker-value-example",
  templateUrl: "datepicker-value-example.html",
  styleUrls: ["datepicker-value-example.css"]
})
export class DatepickerValueExample {
  secondFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.secondFormGroup = new FormGroup({
      orderCtrl: new FormArray([
        this.initOrderForm(),
        this.initOrderForm(),
        this.initOrderForm(),
        this.initOrderForm()
      ]),
      customer: new FormControl({ value: "", disabled: true }),
      poNumber: new FormControl({ value: "", disabled: true }),
      masterID: new FormControl({ value: "", disabled: true }),
      poDate: new FormControl({ value: "", disabled: true }),
      requestedDeliveryDate: new FormControl({ value: "", disabled: true }),
      addressName: new FormControl({ value: "", disabled: true }),
      division: new FormControl("", Validators.required),
      warehouse: new FormControl("", Validators.required),
      shipToAddress: new FormControl("", Validators.required)
    });
  }

  /**
   * Method that init a order form
   * @author Castor Transformación Digital - Alvaro Felipe Garcia Mendez
   * @since 2020-07-14
   */
  initOrderForm(): FormGroup {
    return new FormGroup({
      firstCtrl: new FormArray([this.initLineForm()]),
      deliveryDate: new FormControl("", Validators.required),
      shippingDate: new FormControl("", Validators.required),
      flagToUpdate: new FormControl("A", Validators.required),
      orderNumber: new FormControl("")
    });
  }

  /**
   * Method that init a line of forms
   * @author Castor Transformación Digital - Alvaro Felipe Garcia Mendez
   * @since 2020-07-14
   */
  initLineForm(existingLine?: boolean, initLineNumber?: string): FormGroup {
    return new FormGroup({
      selectPartCode: new FormControl("", Validators.required),
      quantities: new FormControl("", Validators.required),
      poPrice: new FormControl({ value: "", disabled: true }),
      buyerPartCode: new FormControl({ value: "", disabled: true }),
      salesOrderPrice: new FormControl(""),
      selectPromIndicator: new FormControl("", Validators.required),
      lotNumber: new FormControl("", [
        Validators.pattern(/^$|^[\d,\s]+$/),
        Validators.maxLength(7),
        Validators.minLength(7)
      ]),
      flagExistingLine: new FormControl(!!existingLine, Validators.required),
      flagToUpdate: new FormControl("A", Validators.required),
      lineNumber: new FormControl(
        initLineNumber ? initLineNumber : "",
        Validators.required
      )
    });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
