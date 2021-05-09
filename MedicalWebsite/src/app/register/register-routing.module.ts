import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageSuccessfulComponent } from './register-page-successful/register-page-successful.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterPageComponent
    },
    {
        path: 'register-successful',
        component: RegisterPageSuccessfulComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
