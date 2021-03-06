import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ECRUDModalModes } from '@shared/models/modals.model';
import {
  IAddUpdateSearchCompanyConfig, ICompanyPayload, ICompanyParsed,
  ICompanyRaw
} from '@root/app/companies/companies.model';
import { companiesMock } from '@root/app/companies/companies.mock';
import { companyTypes } from '@root/app/companies/companies.constant';
import { personTypes } from '@shared/constants/types.constant';
import { CompanyService } from '@root/app/companies/services/company.service';
import { UtilService } from '@shared/services/util.service';
import { IChoices } from '@shared/models/general.model';

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

  choices: IChoices = {
    companyTypes: companyTypes,
    personTypes: personTypes,

    companies: [],
  };

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };

  get companyId() : number { return this.config && this.config.company && this.config.company.id || 0 };
  data: ICompanyPayload = {
    name: '',
    type: 0,
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
    public utilService: UtilService,
    public companyService: CompanyService
  ) { }

  ngOnInit(): void {

    setTimeout(() => {
      if (this.config && this.config.company) {
        this.data = this.utilService.deepCopyObject(this.config.company);
      }
    });

    // load companies for dropdown choices
    this.companyService.apiGetList({})
      .subscribe((res: { companies: ICompanyParsed[] }) => {
        this.choices.companies = res.companies;
      });
  }

  renderProductToEdit() {
    if (this.config && this.config.company) {
      this.data = this.utilService.deepCopyObject(this.config.company);
    }
  }

  resetForm(): void {
    console.log('resetForm:');

    this.renderProductToEdit();
    this.resetFormStatus(false, '', '');
  }

  resetFormStatus(sending: boolean, type: string, message: string): void {
    console.log('resetFormStatus:');

    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
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
        this.addCompany();
        break;
      case ECRUDModalModes.Edit:
        this.updateCompany();
        break;
    }
  }

  addCompany() {
    this.companyService.apiAddOne(this.data)
      .subscribe((res: { company: ICompanyParsed }) => {
          console.log('add company : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile(res.company);
        },
        (reason: any) => {
          console.log('add company : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });

  }

  updateCompany() {
    this.companyService.apiUpdateOne(this.companyId, this.data)
      .subscribe((res: { company: ICompanyParsed }) => {
          console.log('updated company : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile(res.company);
        },
        (res: any) => {
          console.log('updated company : Failure', res);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.update);
        });
  }

  closeModalAfterAWhile(company: ICompanyParsed) {
    this.result.emit(company);
    setTimeout(this.bsModalRef.hide, 3000);
  }


  closeModal(): void {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
