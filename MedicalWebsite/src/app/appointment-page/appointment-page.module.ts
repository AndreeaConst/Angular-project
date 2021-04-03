import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentPageRoutingModule } from './appointment-page-routing.module';
import { MainAppointmentPageComponent } from './main-appointment-page/main-appointment-page.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [MainAppointmentPageComponent],
  imports: [
    CommonModule,
    AppointmentPageRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class AppointmentPageModule { }
