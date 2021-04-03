import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAppointmentPageComponent } from './main-appointment-page/main-appointment-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainAppointmentPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentPageRoutingModule { }
