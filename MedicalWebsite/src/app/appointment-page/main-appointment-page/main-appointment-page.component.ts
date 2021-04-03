import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface LocationDepartmentDoctor {
  value: string;
}

@Component({
  selector: 'app-main-appointment-page',
  templateUrl: './main-appointment-page.component.html',
  styleUrls: ['./main-appointment-page.component.scss']
})

export class MainAppointmentPageComponent implements OnInit {

  constructor() { }

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  getErrorMessageFirstName() {
    return this.firstName.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageLastName() {
    return this.lastName.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'You must enter a value' : true;
  }

  locations: LocationDepartmentDoctor[] = [
    { value: 'London, Addle Street, no. 3' },
    { value: 'London, Brick Street, no. 147' },
    { value: 'London, Carlisle Avenue, no. 15' },
    { value: 'Manchester, Deansgate Street, no. 9' },
    { value: 'Manchester, Kingsway Street, no. 158' },
    { value: 'Nottingham, Aberfort Avenue, no. 85' },

  ];
  locationControl = new FormControl('', [Validators.required]);
  selectedLocation = '';

  departments: LocationDepartmentDoctor[] = [
    { value: 'Cardiology' },
    { value: 'Diagnostic Imaging' },
    { value: 'Elderly services' },
    { value: 'Gastroenterology' },
    { value: 'Obstetrics/Gynecology' },
    { value: 'Nephrology' },
    { value: 'Neurology' },
    { value: 'Oncology' },
    { value: 'Ophthalmology' },
    { value: 'Orthopaedics' },
    { value: 'Physiotherapy' },
    { value: 'Radiology' },
    { value: 'Rheumatology' },
    { value: 'Sexual Health' }
  ];
  departmentControl = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

}
