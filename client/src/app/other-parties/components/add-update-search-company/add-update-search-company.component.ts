import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ECRUDModalModes } from '@shared/models/modals.model';
import {
  IAddUpdateSearchCompanyConfig,
  ICompanyRaw
} from '@root/app/other-parties/components/companies/companies.model';
import { companiesMock } from '@root/app/other-parties/components/companies/companies.mock';
import { companyTypes } from '@root/app/other-parties/components/companies/companies.constant';
import { personTypes } from '@shared/constants/types.constant';
import { CompanyService } from '@root/app/other-parties/services/company.service';

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
    persons: [{type: 0, firstName: '', lastName: '', phone: []}]
  };

  responseMessages = {
    success: {
      add: 'Company has been added successfully.',
      update: 'Company has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding Company !',
      update: 'Failed in updating Company !',
    },
  };

  constructor(
    public bsModalRef: BsModalRef,
    public companyService: CompanyService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      if (this.config && this.config.company) {
        this.data = this.config.company;
      }
    });
  }

  resetFormStatus(sending: boolean, type: string, message: string): void {
    console.log('resetFormStatus:');
    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(form: any): any {
    console.log('submitForm:');
    // skip if fails validation
    if (form.invalid) {
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    this.resetFormStatus(true, '', '');

    switch (this.config?.mode) {
      case ECRUDModalModes.Add:
        this.addCompany(this.data);
        break;
      case ECRUDModalModes.Edit:
        this.updateCompany(this.data);
        break;
    }
  }

  addCompany(company: ICompanyRaw) {
    this.companyService.apiAddOne(company)
      .subscribe((res: any) => {
          console.log('add company : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile();
        },
        (reason: any) => {
          console.log('add company : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });

  }

  updateCompany(company: ICompanyRaw) {
    this.companyService.apiUpdateOne(company)
      .subscribe((res: any) => {
          console.log('updated company : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile();
        },
        (res: any) => {
          console.log('updated company : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile() {
    setTimeout(this.bsModalRef.hide, 3000);
  }


  closeModal(): void {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
