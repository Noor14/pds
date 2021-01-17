import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  data = {
    type: 1,
    username: '',
    firstName: '',
    lastName: '',
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
