import {Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {OrderInfo, ShopService, Wine} from "../../services/shop.service";
import {isPlatformBrowser} from "@angular/common";
import {FormControl, FormGroup, isFormControl, Validators} from "@angular/forms";
import {fadeInOut} from "../fade";

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confrim-order.component.html',
  styleUrl: './confrim-order.component.css',
  animations:[fadeInOut]
})
export class ConfrimOrderComponent implements OnInit {
isBrowser:boolean=false;

  @Output() closeOrder:EventEmitter<void>= new EventEmitter<void>;
  @Output() closeConfirm:EventEmitter<OrderInfo>= new EventEmitter<OrderInfo>;
   form!: FormGroup;
  constructor(private shopService:ShopService,@Inject(PLATFORM_ID) private platformId: Object)
  {this.isBrowser = isPlatformBrowser(this.platformId);}

  onSubmit() {
    if (this.form.valid) {
      this.closeConfirm.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
    ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(20)]),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20), this.noNumbersValidator]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(20), this.noNumbersValidator]),
      address: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]),
    });
  }
  noNumbersValidator(control: FormControl): { [key: string]: any } | null {
    const forbidden = /\d/.test(control.value);
    return forbidden ? { 'forbiddenValue': { value: control.value } } : null;
  }
  close()
 {
   setTimeout(() => {
    this.closeOrder.emit();
  }, 0);

 }

  protected readonly isFormControl = isFormControl;
}
