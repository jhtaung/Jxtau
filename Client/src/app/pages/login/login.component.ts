import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  resultMessage: string = '';
  model: any = {};

  constructor(
    private router: Router,
    private accountService: AccountService,
    private snackBar: MatSnackBar
  ) {}

  submit() {
    this.model = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.snackBar.open(
          'Login Success!', '', {
            duration: 3000,
            panelClass: ['jh-snackbar-green'],
          }
        );
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
