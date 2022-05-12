import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Jxtau';

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    var storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user: User = JSON.parse(storedUser ?? '');
      this.accountService.setCurrentUser(user);
    } else {
      this.accountService.setCurrentUser(undefined);
    }
    
  }
}
