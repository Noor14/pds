import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-update-search-user',
  templateUrl: './add-update-search-user.component.html',
  styleUrls: ['./add-update-search-user.component.scss']
})
export class AddUpdateSearchUserComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

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
      name: 'Karachi'
    }, {
      name: 'Lahore'
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

  submitForm(form: any) {
    console.log(form)
  }
}
