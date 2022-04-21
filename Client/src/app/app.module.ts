import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './layouts/nav/nav.component';
import { MaterialModule } from './modules/material.module';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MembersComponent } from './pages/members/members.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { ErrorServerComponent } from './pages/error-server/error-server.component';
import { ErrorTestsComponent } from './pages/error-tests/error-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MembersComponent,
    ErrorNotFoundComponent,
    ErrorServerComponent,
    ErrorTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
