import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageSuccessfulComponent } from './login-page-successful/login-page-successful.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'login-successful',
        component: LoginPageSuccessfulComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
