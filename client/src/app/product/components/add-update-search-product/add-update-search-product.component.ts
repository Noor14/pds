import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { productTypes } from '@shared/constants/types.constant';
import { EProductModalModes, IAddUpdateSearchProductConfig, IProductRaw } from '../../product.model';
import { companiesMock } from '../../../other-parties/components/companies/companies.mock';

@Component({
  selector: 'app-add-update-search-product',
  templateUrl: './add-update-search-product.component.html',
  styleUrls: ['./add-update-search-product.component.scss']
})
export class AddUpdateSearchProductComponent implements OnInit {
  public result = new EventEmitter();
  public config: IAddUpdateSearchProductConfig | undefined;

  private titles = {
    [EProductModalModes.Add]: 'Add Product',
    [EProductModalModes.Edit]: 'Edit Product',
    [EProductModalModes.Search]: 'Search Product',
    [EProductModalModes.ReadOnly]: 'View Product',
  }

  get modalTitle(): string {
    const mode = this.config ? this.config.mode : EProductModalModes.Add;
    return this.titles[mode];
  }

  productTypes = productTypes;
  companies = companiesMock;

  // data: IProductRaw = {;
  data = {
    id: '',
    batchNumber: '',
    packInfo: '',
    name: '',
    generic: '',

    type: undefined,
    companyId: undefined,
    tp: undefined,
    mrp: undefined,
    net: undefined,
    boxQuantity: undefined,
  };

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm() {
    console.log('submitForm:');
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }
}
