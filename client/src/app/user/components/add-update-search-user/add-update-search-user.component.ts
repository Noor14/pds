import { Component, EventEmitter, OnInit } from '@angular/core';
import { ECRUDModalModes, IAddUpdateSearchUserConfig, IUserRaw } from '@root/app/user/users.model';
import { companiesMock } from '@root/app/companies/companies.mock';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilService } from '@shared/services/util.service';
import { UserService } from '@root/app/user/services/user.service';

@Component({
  selector: 'add-update-search-user',
  templateUrl: './add-update-search-user.component.html',
  styleUrls: ['./add-update-search-user.component.scss']
})
export class AddUpdateSearchUserComponent implements OnInit {
  public result = new EventEmitter();
  public config: IAddUpdateSearchUserConfig | undefined;

  private titles = {
    [ECRUDModalModes.Add]: 'Add User',
    [ECRUDModalModes.Edit]: 'Edit User',
    [ECRUDModalModes.Search]: 'Search User',
    [ECRUDModalModes.ReadOnly]: 'View User',
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

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

  userTypes = userTypes;
  companies = companiesMock; // TODO implement real companies list

  data: any = {
    id: '',
    batchNumber: '',
    packInfo: '',
    name: '',
    generic: '',

    type: undefined,
    companyId: undefined,
    mrp: undefined,
    net: undefined,
    boxQuantity: undefined,
  };

  constructor(
    public bsModalRef: BsModalRef,
    public utilService: UtilService,
    public userService: UserService
  ) {

  }

  ngOnInit(): void {
    console.log('ngOnInit:');

    // waiting for the assignment. i.e. for second event loop digest.
    setTimeout(() => {
      this.renderUserToEdit();
    });
  }

  renderUserToEdit() {
    if (this.config && this.config.user) {
      this.data = this.utilService.deepCopyObject(this.config.user);
    }
  }

  resetForm(): void {
    console.log('resetForm:');
    this.renderUserToEdit();
    this.resetFormStatus(false, '', '');
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

    switch (this.config?.mode) {
      case ECRUDModalModes.Add:
        this.addUser(this.data);
        break;
      case ECRUDModalModes.Edit:
        this.updateUser(this.data);
        break;
    }
  }

  addUser(user: IUserRaw): void {
    this.userService.apiAddOne(user)
      .subscribe((res: any) => {
          console.log('add user : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile();
        },
        (reason: any) => {
          console.log('add user : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });
  }

  updateUser(user: IUserRaw): void {
    this.userService.apiUpdateOne(user)
      .subscribe((res: any) => {
          console.log('updated user : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile();
        },
        (res: any) => {
          console.log('updated user : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile() {
    setTimeout(this.bsModalRef.hide, 3000);
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
