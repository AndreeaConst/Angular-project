import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utils/custom-validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({

      emailRegister: ['', Validators.compose(
        [Validators.required]
      )],

      firstName: ['', Validators.compose(
        [Validators.required,
        CustomValidators.hasMaximumValue(20)]
      )],

      lastName: ['', Validators.compose(
        [Validators.required,
        CustomValidators.hasMaximumValue(10)]
      )],

      passwordRegister: ['',
        {
          validators: [
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              CustomValidators.passwordStrength()
            ])
          ],
          updateOn: 'blur'
        }]

    })
  }

  get firstName() {
    return this.myForm.get("firstName");
  }

  get lastName() {
    return this.myForm.get("lastName");
  }

  get emailRegister() {
    return this.myForm.get("emailRegister");
  }

  get passwordRegister() {
    return this.myForm.get("passwordRegister");
  }

  getErrorMessageRequiredFirstName() {
    return this.firstName?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageLengthFirstName() {
    return this.firstName?.errors?.hasMaximumValue == null ? 'Your name must be maximum 20 characters long' : true;
  }

  getErrorMessageRequiredLastName() {
    return this.lastName?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageLengthLastName() {
    return this.lastName?.errors?.hasMaximumValue == null ? 'Your name must be maximum 10 characters long' : true;
  }

  getErrorMessageRequiredEmailRegister() {
    return this.myForm.get("emailRegister")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageRequiredPasswordRegister() {
    return this.passwordRegister?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageStrengthPasswordRegister() {
    return this.passwordRegister?.errors?.passwordStrength ? 'Your password must contain at least one capital letter, one small letter, one digit and one special character' : true;
  }

  getErrorMessageLengthPasswordRegister() {
    return this.passwordRegister?.hasError('minlength') ? 'Your password must be at least 6 characters long' : true;
  }


}
