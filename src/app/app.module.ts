import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes Material Agregados
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
//Componentes Funcionalidad
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Security/jwt.interceptor';

//Componentes Propios Creados
import { LoginComponent } from './Views/login/login.component';
import { HomeComponent } from './Views/home/home.component';
import { AdminComponent } from './Views/admin/admin.component';
import { ClientComponent } from './Views/client/client.component';
import { AccessDeniedComponent } from './Views/access-denied/access-denied.component';
import { InspectorModuleComponent } from './Views/admin/Modules/inspector-module/inspector-module.component';
import { PerfilModuleComponent } from './Views/admin/Modules/perfil-module/perfil-module.component';
import { LocalesModuleComponent } from './Views/admin/Modules/locales-module/locales-module.component';
import { RecaudadoresModuleComponent } from './Views/admin/Modules/recaudadores-module/recaudadores-module.component';
import { UserModuleComponent } from './Views/admin/Modules/user-module/user-module.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ClientComponent,
    AccessDeniedComponent,
    InspectorModuleComponent,
    PerfilModuleComponent,
    LocalesModuleComponent,
    RecaudadoresModuleComponent,
    UserModuleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
