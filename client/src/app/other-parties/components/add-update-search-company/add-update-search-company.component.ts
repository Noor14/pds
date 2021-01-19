import { Component, EventEmitter, OnInit } from '@angular/core';
import { ECRUDModalModes } from '@shared/models/modals.model';
import { IAddUpdateSearchCompanyConfig } from '@root/app/other-parties/components/companies/companies.model';
import { companiesMock } from '@root/app/other-parties/components/companies/companies.mock';
import { companyTypes } from '@shared/constants/types.constant';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IPersonRaw } from '@shared/models/general.model';

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

  productTypes = companyTypes;
  companies = companiesMock;

  data: any = {
    id: '',
    name: '',
    type: '',
    startedSince: '',
    persons: ''
  };

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }
  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(): void {
    console.log('submitForm:');
  }

  closeModal(): void {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }

}
