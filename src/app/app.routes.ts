import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { OtherServicesComponent } from './pages/more-services/other-services/other-services.component';
import { MyCardsComponent } from './pages/more-services/my-cards/my-cards.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NewAccountComponent } from './pages/new-account/new-account.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'newUser',
    component: NewAccountComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'investments', component: InvestmentsComponent, canActivate: [AuthGuard] },
      { path: 'otherServices', component: OtherServicesComponent, canActivate: [AuthGuard] },
      { path: 'myAccount', component: MyAccountComponent, canActivate: [AuthGuard] },
      { path: 'otherServices/myCards', component: MyCardsComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: '**', component: ErrorPageComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  bindToComponentInputs: true,
});
