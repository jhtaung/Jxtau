import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-server',
  templateUrl: './error-server.component.html',
  styleUrls: ['./error-server.component.css'],
})
export class ErrorServerComponent {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }
}
