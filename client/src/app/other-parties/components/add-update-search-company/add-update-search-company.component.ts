import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ECRUDModalModes } from '@shared/models/modals.model';
import { IAddUpdateSearchCompanyConfig } from '@root/app/other-parties/components/companies/companies.model';
import { companiesMock } from '@root/app/other-parties/components/companies/companies.mock';
import { companyTypes } from '@root/app/other-parties/components/companies/companies.constant';
import { personTypes } from '@shared/constants/types.constant';

@Component({
  selector: 'app-add-update-search-company',
  templateUrl: './add-update-search-company.component.html',
  styleUrls: ['./add-update-search-company.component.scss']
})
export class AddUpdateSearchCompanyComponent implements OnInit {
  public result = new EventEmitter();
  public config: IAddUpdateSearchCompanyConfig | undefined;
  private titles = {
    [ECRUDModalModes.Add]: 'Add Company',
    [ECRUDModalModes.Edit]: 'Edit Company',
    [ECRUDModalModes.Search]: 'Search Company',
    [ECRUDModalModes.ReadOnly]: 'View Company',
  };

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : ECRUDModalModes.Add;
    return this.titles[mode];
  }

  companyTypes = companyTypes;
  parsonTypes = personTypes;
  companies = companiesMock;

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };

  data: any = {
    id: '',
    name: '',
    type: undefined,
    startedSince: '',
    persons: [{type: 0, firstName: '', lastName:'', phone:[]}]
  };

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  resetFormStatus(sending: boolean, type: string, message: string) {
    console.log('resetFormStatus:');
    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(form: any): void {
    console.log('submitForm:');

    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

  }

  closeModal(): void {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
