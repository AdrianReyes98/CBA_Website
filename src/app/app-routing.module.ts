import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './Security/login-guard.guard';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { AdminComponent } from './Views/admin/admin.component';
import { ClientComponent } from './Views/client/client.component';
import { AccessDeniedComponent } from './Views/access-denied/access-denied.component';

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
  },
  {
    'path': 'Administrador',
    component: AdminComponent,
    data: {
      role: 'Administrador'
    },
    canActivate: [LoginGuardGuard]
  },
  {
    'path': 'Cliente',
    component: ClientComponent,
    data: {
      role: 'Cliente'
    },
    canActivate: [LoginGuardGuard]
  },
  {
    'path': 'noaccess',
    component: AccessDeniedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
