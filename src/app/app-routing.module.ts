import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './Security/login-guard.guard';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { AdminComponent } from './Views/admin/admin.component';
import { ClientComponent } from './Views/client/client.component';
import { AccessDeniedComponent } from './Views/access-denied/access-denied.component';
import { ClientModuleComponent } from './Views/admin/Modules/client-module/client-module.component';
import { SupervisorModuleComponent } from './Views/admin/Modules/supervisor-module/supervisor-module.component';
import { InspectorModuleComponent } from './Views/admin/Modules/inspector-module/inspector-module.component';
import { PerfilModuleComponent } from './Views/admin/Modules/perfil-module/perfil-module.component';
import { LocalesModuleComponent } from './Views/admin/Modules/locales-module/locales-module.component';
import { RecaudadoresModuleComponent } from './Views/admin/Modules/recaudadores-module/recaudadores-module.component';
import { UserModuleComponent } from './Views/admin/Modules/user-module/user-module.component';
import { RegisterComponent } from './Views/register/register.component';
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
    'path': 'register',
     component: RegisterComponent
  },
  {
    'path': 'Administrador',
    component: AdminComponent,
    data: {
      role: 'Administrador'
    },
    children: [
      {
        path: '',
        component: ClientModuleComponent
      },
      {
        path: 'Clientes', 
        component: ClientModuleComponent
      },
      {
        path: 'Supervisores', 
        component: SupervisorModuleComponent
      },
      {
        path: 'Inspectores', 
        component: InspectorModuleComponent
      },
      {
        path: 'Perfiles', 
        component: PerfilModuleComponent
      },
      {
        path: 'Locales', 
        component: LocalesModuleComponent
      },
      {
        path: 'Recaudadores', 
        component: RecaudadoresModuleComponent
      },
      {
        path: 'Usuarios',
        component: UserModuleComponent
      }
    ],
    canActivate: [LoginGuardGuard]
  },
  {
    'path': 'Cliente',
    component: ClientComponent,
    data: {
      role: 'Cliente'
    },
    children: [   
      {
          path: 'Perfiles', 
          component: PerfilModuleComponent
        },
  
    ],
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
