import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageSuccessfulComponent } from './login-page-successful/login-page-successful.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageSuccessfulComponent } from './register-page-successful/register-page-successful.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'register',
    component: RegisterPageComponent
  },
  {
    path: 'login-successful',
    component: LoginPageSuccessfulComponent
  },
  {
    path: 'register-successful',
    component: RegisterPageSuccessfulComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
