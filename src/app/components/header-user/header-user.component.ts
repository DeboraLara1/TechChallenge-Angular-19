import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header-user',
  imports: [NgIf],
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css',
})
export class HeaderUserComponent {
  isOpenMenuProfile = false;

  toggleMenu(): void {
    this.isOpenMenuProfile = !this.isOpenMenuProfile;
  }

  closeMenu(): void {
    this.isOpenMenuProfile = false;
  }
}
