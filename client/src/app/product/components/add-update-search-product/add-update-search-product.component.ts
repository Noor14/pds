import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ECRUDModalModes, IAddUpdateSearchProductConfig, IProductRaw } from '../../products.model';
import { companiesMock } from '@root/app/other-parties/components/companies/companies.mock';

import { ProductService } from '../../services/product.service';
import { productTypes } from '../../products.constant';
import { UtilService } from '@shared/services/util.service';


@Component({
  selector: 'app-add-update-search-product',
  templateUrl: './add-update-search-product.component.html',
  styleUrls: ['./add-update-search-product.component.scss']
})
export class AddUpdateSearchProductComponent implements OnInit {
  public result = new EventEmitter();
  public config: IAddUpdateSearchProductConfig | undefined;

  private titles = {
    [ECRUDModalModes.Add]: 'Add Product',
    [ECRUDModalModes.Edit]: 'Edit Product',
    [ECRUDModalModes.Search]: 'Search Product',
    [ECRUDModalModes.ReadOnly]: 'View Product',
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
      add: 'Product has been added successfully.',
      update: 'Product has been updated successfully.',
    },
    failure: {
      add: 'Failed in adding product !',
      update: 'Failed in updating product !',
    },
  };

  productTypes = productTypes;
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
    public productService: ProductService
  ) {

  }

  ngOnInit(): void {
    console.log('ngOnInit:');

    // waiting for the assignment. i.e. for second event loop digest.
    setTimeout(() => {
      this.renderProductToEdit();
    });
  }

  renderProductToEdit() {
    if (this.config && this.config.product) {
      this.data = this.utilService.deepCopyObject(this.config.product);
    }
  }

  resetForm(): void {
    console.log('resetForm:');
    this.renderProductToEdit();
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
        this.addProduct(this.data);
        break;
      case ECRUDModalModes.Edit:
        this.updateProduct(this.data);
        break;
    }
  }

  addProduct(product: IProductRaw): void {
    this.productService.apiAddOne(product)
      .subscribe((res: any) => {
          console.log('add product : success', res);

          this.resetFormStatus(false, 'success', this.responseMessages.success.add);
          this.closeModalAfterAWhile();
        },
        (reason: any) => {
          console.log('add product : Failure', reason);
          this.resetFormStatus(false, 'error', this.responseMessages.failure.add);
        });
  }

  updateProduct(product: IProductRaw): void {
    this.productService.apiUpdateOne(product)
      .subscribe((res: any) => {
          console.log('updated product : success', res);
          this.resetFormStatus(false, 'success', this.responseMessages.success.update);
          this.closeModalAfterAWhile();
        },
        (res: any) => {
          console.log('updated product : Failure', res);
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
