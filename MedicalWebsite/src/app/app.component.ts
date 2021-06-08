import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { LogoutService } from './services/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'MedicalWebsite';
  isLoggedout = true;
  userName = "User";

  constructor(public logoutService: LogoutService) { 
    logoutService.isLogout$.subscribe((value: boolean)=>{
      this.isLoggedout = value;
    });
    logoutService.userName$.subscribe((value: string)=>{
      this.userName = value;
    })
  }

}
