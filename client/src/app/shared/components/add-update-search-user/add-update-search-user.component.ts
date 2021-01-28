import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {ECRUDModalModes} from "@shared/models/modals.model";

@Component({
  selector: 'app-add-update-search-user',
  templateUrl: './add-update-search-user.component.html',
  styleUrls: ['./add-update-search-user.component.scss']
})
export class AddUpdateSearchUserComponent implements OnInit {
  @Input() user: any = {};
  @Input() isEdit: boolean = false;
  public result = new EventEmitter();

  methods = {
    onSubmit: () => {},
    onReset: () => {}
  };

  modes = {
    isUser: false,
    isStore: false,
    isDoctor: false,
  }

  data = {
    type: 1,
    username: 'qaswa_admin',
    firstName: 'Admin',
    lastName: 'Qaswa',
    email: 'admin@qaswa.com',
    address: 'every where in every city',
    areaId: 1001,
    contact: '03010123456',
    storeInfo: {
      name: 'Qaswa Medical Store',
    },
    doctorInfo: {
      specialties: '',
      experienceSince: '1990',
      certifications: ''
    }
  };

  areas = [
    {
      id: 1001,
      name: 'Karachi'
    }, {
      id: 1002,
      name: 'Lahore'
    }
  ];

  certifications = [
    {
      name: 'Something',
      id: 4001
    }
  ];
  specialties = [
    {
      name: 'Something',
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
      add: 'User has been added successfully.',
      update: 'User has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding user !',
      update: 'Failed in updating user !',
    },
  };

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  defaultSelectedOption ( value: any ) {
    return (typeof value === 'string' && value.length <= 0 ? '' : value === null ? null : undefined);
  }

  resetFormStatus(sending: boolean, type: string, message: string) {
    console.log('resetFormStatus:');
    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  submitForm(form: any): void {

    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    this.resetFormStatus(true, '', '');

    // switch (this.config?.mode) {
    //   case ECRUDModalModes.Add:
    //     this.addProduct(this.data);
    //     break;
    //   case ECRUDModalModes.Edit:
    //     this.updateProduct(this.data);
    //     break;
    // }
  }
}
