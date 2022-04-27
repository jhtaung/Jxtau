import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  resultMessage: string = '';
  model: any = {};

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.model = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.resultMessage = 'Login Success!';
        this.router.navigateByUrl('/');
      },
      error: error => {
        console.log(error);
        this.resultMessage = 'Login Error!';
      },
    });
  }

  hasError(controlName: string, errorName: string) {
    return this.form.controls[controlName].hasError(errorName);
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }
}
