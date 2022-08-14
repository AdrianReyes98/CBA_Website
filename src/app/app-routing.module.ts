import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './Security/login-guard.guard';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';

const routes: Routes = [
  {
    'path':'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    'path':'home',
    component: HomeComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    'path': 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
