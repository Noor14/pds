import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {ECRUDModalModes} from "@shared/models/modals.model";
import { StoreService } from '@root/app/store/services/store.service';
import { DoctorService } from '@root/app/doctor/services/doctor.service';

@Component({
  selector: 'app-add-update-search-user',
  templateUrl: './add-update-search-user.component.html',
  styleUrls: ['./add-update-search-user.component.scss']
})
export class AddUpdateSearchUserComponent implements OnInit {
  @Input() user: any = {};
  @Input() isEdit: number = 0;
  public result = new EventEmitter();

  methods = {
    onSubmit: (userId: any, data: any) => {
      return new EventEmitter();
    },
    onReset: () => {}
  };

  modes = {
    isUser: false,
    isStore: false,
    isDoctor: false,
  };

  data = {
    type: 101,
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
      value: 101,
      name: 'Store'
    }, {
      value: 102,
      name: 'Doctor'
    }, {
      value: 103,
      name: 'User'
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
      add: 'Failed in adding team !',
      update: 'Failed in updating team !',
    },
  };

  constructor(
    public storeService: StoreService,
    public doctorService: DoctorService
  ) {
  }

  ngOnInit(): void {
    this.assignDataFromUserType(this.user.type)
  }

  onChange(form: any) {
    this.assignDataFromUserType(parseInt(form.users_type, 0));
  }

  resetForm(): void {
    console.log('resetForm:');

    this.resetFormStatus(false, '', '');
  }

  resetFormStatus(sending: boolean, type: string, message: string): void {
    console.log('resetFormStatus:');

    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  defaultSelectedOption ( value: any ) {
    return (typeof value === 'string' && value.length <= 0 ? '' : value === null ? null : undefined);
  }

  assignDataFromUserType(type: number) {
    this.modes.isStore = false;
    this.modes.isDoctor = false;
    this.modes.isUser = false;

    if (type === 101) {
      this.modes.isStore = true;
      this.getSubmitEvent(this.isEdit, this.storeService);
    } else if (type === 102) {
      this.modes.isDoctor = true;
      this.getSubmitEvent(this.isEdit, this.doctorService);
    } else if (type === 103) {
      this.modes.isUser = true;
      // this.getSubmitEvent(this.isEdit, this.userService);
    }
  }
  getSubmitEvent(mode: number, service: any) {
    switch (mode) {
      case ECRUDModalModes.Add: this.methods.onSubmit = service.apiAddOne;
        break;
      case ECRUDModalModes.Edit: this.methods.onSubmit = service.apiUpdateOne;
        break;
    }
  }

  submitForm(form: any): void {
    const userId = 0;
    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    this.resetFormStatus(true, '', '');
    this.methods.onSubmit(userId, this.data)
      .subscribe((res: any) => {
        console.log(res);
      }, (error: any) => {
        console.log(error)
      });
  }
}
