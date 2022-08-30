import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes Material Agregados
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

//Componentes Funcionalidad
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Security/jwt.interceptor';

//Componentes Propios Creados
import { LoginComponent } from './Views/login/login.component';
import { HomeComponent } from './Views/home/home.component';
import { AdminComponent } from './Views/admin/admin.component';
import { ClientComponent } from './Views/client/client.component';
import { AccessDeniedComponent } from './Views/access-denied/access-denied.component';
import { InspectorModuleComponent } from './Views/admin/Modules/inspector-module/inspector-module.component';
import { PerfilModuleComponent } from './Views/perfil-module/perfil-module.component';
import { RecaudadoresModuleComponent } from './Views/admin/Modules/recaudadores-module/recaudadores-module.component';
import { UserModuleComponent } from './Views/admin/Modules/user-module/user-module.component';
import { DialogRegisterUserComponent } from './Views/admin/Modules/user-module/dialog-register-user/dialog-register-user.component';
import { RegisterComponent } from './Views/register/register.component';
import { InputDialogComponent } from './Views/Common/input-dialog/input-dialog.component';
import { ConfirmDialogComponent } from './Views/Common/confirm-dialog/confirm-dialog.component';
import { HomeModuleComponent } from './Views/client/Modules/home-module/home-module.component';
import { DigitadorModuleComponent } from './Views/admin/Modules/digitador-module/digitador-module.component';
import { DigitadorComponent } from './Views/digitador/digitador.component';


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
    RecaudadoresModuleComponent,
    UserModuleComponent,
    DialogRegisterUserComponent,
    RegisterComponent,
    InputDialogComponent,
    ConfirmDialogComponent,
    HomeModuleComponent,
    DigitadorModuleComponent,
    DigitadorComponent,

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
    MatMenuModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
