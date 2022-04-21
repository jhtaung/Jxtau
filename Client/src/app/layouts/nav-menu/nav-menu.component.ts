import { Component, OnInit } from '@angular/core';

interface IMenu {
  text: string;
  icon: string;
  routerLink?: string;
  children?: IMenuItem[];
}

interface IMenuItem {
  text: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  menuList: IMenu[] = [
    {
      text: 'Home',
      icon: 'home',
      routerLink: '/',
    },
    {
      text: 'Admin',
      icon: 'account_circle',
      children: [
        {
          text: 'Members',
          icon: 'list',
          routerLink: '/members',
        }
      ]
    },
    {
      text: 'Account',
      icon: 'account_circle',
      children: [
        {
          text: 'Register',
          icon: 'list',
          routerLink: '/register',
        },
        {
          text: 'Login',
          icon: 'list',
          routerLink: '/login',
        },
        {
          text: 'Profile',
          icon: 'list',
          routerLink: '/profile',
        },
      ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
