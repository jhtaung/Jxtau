import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hide = true;
  form: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required]),
  });
  resultMessage: string = '';
  model: any;

  constructor(
    private location: Location,
    private accountService: AccountService
  ) {}

  submit() {
    console.log(this.form.value);
    this.model = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.resultMessage = 'Register Success!';
      },
      error: error => {
        console.log(error);
        this.resultMessage = 'Register Error!';
      },
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }

  onCancel() {
    this.location.back();
  }
}
