import { Component, OnInit } from '@angular/core';
import {ECRUDModalModes} from "@shared/models/modals.model";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  modes = ECRUDModalModes;
  data = {
    type: 101,
    username: 'qaswa_admin',
    firstName: 'Admin',
    lastName: 'Qaswa',
    email: 'admin@qaswa.com',
    address: 'every where in every city',
    areaId: 1002,
    contact: '03010123456',
    storeInfo: {
      name: 'Qaswa Medical Store',
    },
    doctorInfo: {
      specialties: 'Gynologist',
      experienceSinceYear: '1990',
      certifications: ''
    }
  };

   passwordObj = {
     password: '',
     retypePassword: ''
   };

  constructor() { }

  ngOnInit(): void {
  }

  profileSubmitForm(form: any) : void {
    console.log('profileSubmitForm:');

    // halt if farm data values are not valid.
    if (form.invalid) {
      console.log('profileSubmitForm: form validation failing.');
      return;
    }

    // proceed as success
  }
}
