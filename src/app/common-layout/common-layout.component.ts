import { Component } from '@angular/core';
import { HeaderUserComponent } from "../components/header-user/header-user.component";
import { SideBarComponent } from "../components/side-bar/side-bar.component";
import { ExtractMenuComponent } from "../components/extract-menu/extract-menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  imports: [HeaderUserComponent, SideBarComponent, ExtractMenuComponent, RouterModule],
  templateUrl: './common-layout.component.html',
  styleUrl: './common-layout.component.css'
})
export class CommonLayoutComponent {

}
