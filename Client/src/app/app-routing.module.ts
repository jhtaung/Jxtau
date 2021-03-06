import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { ErrorServerComponent } from './pages/error-server/error-server.component';
import { ErrorTestsComponent } from './pages/error-tests/error-tests.component';

import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { MemberListComponent } from './pages/member-list/member-list.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: 'error/test', component: ErrorTestsComponent },
  { path: 'error/not-found', component: ErrorNotFoundComponent },
  { path: 'error/server', component: ErrorServerComponent },
  { path: '**', redirectTo: 'error/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
