import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogoutService } from 'src/app/services/logout.service';
import { CustomValidators } from '../utils/custom-validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    public firebaseService: FirebaseService, 
    public logoutService: LogoutService
  ) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      emailLogin: ['', Validators.compose(
        [Validators.required]
      )],

      passwordLogin: ['',
        {
          validators: [
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              CustomValidators.passwordStrength()
            ])
          ],
          updateOn: 'blur'
        }],
      
    })
  }

  async onLogin(email: string, password: string){
    await this.firebaseService.login(email, password)
    if(this.firebaseService.isLoggedin)
      this.logoutService.login();

  }

  get emailLogin() {
    return this.myForm.get("emailLogin");
  }

  get passwordLogin() {
    return this.myForm.get("passwordLogin");
  }

  getErrorMessageRequiredEmailLogin() {
    return this.myForm.get("emailLogin")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageRequiredEmailRegister() {
    return this.myForm.get("emailRegister")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageRequiredPasswordLogin() {
    return this.passwordLogin?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageStrengthPasswordLogin() {
    return this.passwordLogin?.errors?.passwordStrength ? 'Your password must contain at least one capital letter, one small letter, one digit and one special character' : true;
  }

  getErrorMessageLengthPasswordLogin(){
    return this.passwordLogin?.hasError('minlength') ? 'Your password must be at least 6 characters long' : true;
  }

}
