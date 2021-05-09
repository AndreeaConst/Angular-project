import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterRoutingModule } from './register-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { RegisterPageSuccessfulComponent } from './register-page-successful/register-page-successful.component';

@NgModule({
  declarations: [RegisterPageComponent, RegisterPageSuccessfulComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
