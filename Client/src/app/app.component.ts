import { Component } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    var localUser = localStorage.getItem('user');
    const user: User = JSON.parse(localUser ?? '');
    this.accountService.setCurrentUser(user);
  }
}
