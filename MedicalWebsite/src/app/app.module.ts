import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FirebaseService } from './services/firebase.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageSuccessfulComponent } from './login-page-successful/login-page-successful.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterPageSuccessfulComponent } from './register-page-successful/register-page-successful.component';
import { CookieService } from 'ngx-cookie-service';

import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginPageSuccessfulComponent,
    RegisterPageComponent,
    RegisterPageSuccessfulComponent,
    MyFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCfuuTtz-bvtp0nDHKATnHy_0R9JMhiXoU",
      authDomain: "medicalwebsite-16c0c.firebaseapp.com",
      projectId: "medicalwebsite-16c0c",
      storageBucket: "medicalwebsite-16c0c.appspot.com",
      messagingSenderId: "620008568083",
      appId: "1:620008568083:web:b3257361614927a4e196e6"
    }),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [FirebaseService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
