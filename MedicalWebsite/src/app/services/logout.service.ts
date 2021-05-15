import { Injectable, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { FirebaseService } from './firebase.service';


@Injectable({
    providedIn: 'root'
})
export class LogoutService{

    constructor(public firebaseService: FirebaseService) { }

    // Observable string sources
    private isLogout = new Subject<boolean>();
    private userName = new Subject<string>();

    // Observable string streams
    isLogout$ = this.isLogout.asObservable();
    userName$ = this.userName.asObservable();

    // Service message commands
    logout() {
      this.firebaseService.logout()
      this.isLogout.next(true);
      this.userName.next("User");
    }

    login(){
        this.userName.next(this.firebaseService.loginFunctionToGetUsername(this.userName));
        this.isLogout.next(false);
    }
}
