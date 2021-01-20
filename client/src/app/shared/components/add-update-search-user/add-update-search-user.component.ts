import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-search-user',
  templateUrl: './add-update-search-user.component.html',
  styleUrls: ['./add-update-search-user.component.scss']
})
export class AddUpdateSearchUserComponent implements OnInit {

  data = {
    type: 1,
    username: 'qaswa_admin',
    firstName: 'Admin',
    lastName: 'Qaswa',
    email: 'admin@qaswa.com',
    address: 'every where in every city',
    area: 'Lahore',
    contact: '03010123456',
    storeName: 'Qaswa Medical Store',
    specialties: 'Gynologist',
    experienceSinceYear: '1990',
  };

  areas = [
    {
      id: 1,
      name: 'Karachi'
    }, {
      id:2,
      name: 'Lahore'
    }
  ];

  specialties = [
    {
      name: 'something',
      id: 1
    }
  ];

  types = [
    {
      value: 1,
      name: 'Store'
    }, {
      value: 2,
      name: 'Doctor'
    }, {
      value: 3,
      name: 'Client'
    }
  ];

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };
  responseMessages = {
    success: {
      add: 'Product has been added successfully.',
      update: 'Product has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding product !',
      update: 'Failed in updating product !',
    },
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm(form: any) {
    console.log(form)
  }
}
