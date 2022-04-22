import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './modules/material.module';

import { NavComponent } from './layouts/nav/nav.component';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MemberListComponent } from './pages/member-list/member-list.component';

import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { ErrorServerComponent } from './pages/error-server/error-server.component';
import { ErrorTestsComponent } from './pages/error-tests/error-tests.component';

import { HighlightSearchPipe } from './pipes/highlight-search.pipe';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HighlightSearchPipe,
    NavComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ErrorNotFoundComponent,
    ErrorServerComponent,
    ErrorTestsComponent,
    MemberListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    HighlightSearchPipe,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
