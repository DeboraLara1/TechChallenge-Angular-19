import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { NgIf } from '@angular/common';
import { NewAccountComponent } from '../../pages/new-account/new-account.component';

@Component({
  selector: 'app-header',
  imports: [LoginComponent, NgIf, NewAccountComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router: any;
  showLogin = false;
  showNewUser = false;
  toggleLogin(): void {
    this.showLogin = !this.showLogin;
  }

  toggleNewUser(): void {
    this.showNewUser = !this.showNewUser;
  }

  ngOnInit(): void {
    const hamburgerMenu = document.getElementById(
      'hamburgerMenu'
    ) as HTMLElement;
    const sideMenu = document.getElementById('sideMenu') as HTMLElement;
    const closeMenu = document.getElementById('closeMenu') as HTMLElement;

    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      sideMenu.classList.toggle('show');
    });

    closeMenu.addEventListener('click', () => {
      sideMenu.classList.remove('show');
      hamburgerMenu.classList.remove('active');
    });
  }
}
