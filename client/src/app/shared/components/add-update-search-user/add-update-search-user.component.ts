import {Component, EventEmitter, OnInit} from '@angular/core';
import {ECRUDModalModes} from "@shared/models/modals.model";

@Component({
  selector: 'app-add-update-search-user',
  templateUrl: './add-update-search-user.component.html',
  styleUrls: ['./add-update-search-user.component.scss']
})
export class AddUpdateSearchUserComponent implements OnInit {
  public result = new EventEmitter();

  data = {
    type: 1,
    username: 'qaswa_admin',
    firstName: 'Admin',
    lastName: 'Qaswa',
    email: 'admin@qaswa.com',
    address: 'every where in every city',
    area: 1,
    contact: '03010123456',
    storeName: 'Qaswa Medical Store',
    specialties: '',
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
