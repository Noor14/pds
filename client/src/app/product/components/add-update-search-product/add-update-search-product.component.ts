import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { productTypes } from '@shared/constants/types.constant';
import { ECRUDModalModes, IAddUpdateSearchProductConfig, IProductRaw } from '../../products.model';
import { companiesMock } from '../../../other-parties/components/companies/companies.mock';

import { ProductService } from '../../services/product.service';


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

  productTypes = productTypes;
  companies = companiesMock;

  // data: IProductRaw = {;
  defaultData: any = {
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
  data: any;

  constructor(
    public bsModalRef: BsModalRef,
    public productService: ProductService
  ) {
    this.data = this.defaultData;
  }

  ngOnInit(): void {
    console.log('ngOnInit:');

    // waiting for the assignment. i.e. for second event loop digest.
    setTimeout(() => {
      this.data = this.config && this.config.product || this.defaultData;
    });
  }

  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(productData: IProductRaw): void {
    switch (this.config?.mode) {
      case ECRUDModalModes.Add:
        this.addProduct(productData);
        break;
      case ECRUDModalModes.Edit:
        this.updateProduct(productData);
        break;
    }
  }

  addProduct(product: IProductRaw): void {
    this.productService.apiAddOne(product)
      .subscribe((res: any) => {
          console.log('add product : success', res);
          this.bsModalRef.hide();
        },
        (res: any) => {
          console.log('add product : Failure', res);
          this.bsModalRef.hide();
        });
  }

  updateProduct(product: IProductRaw): void {
    this.productService.apiUpdateOne(product)
      .subscribe((res: any) => {
          console.log('updated product : success', res);
          this.bsModalRef.hide();
        },
        (res: any) => {
          console.log('updated product : Failure', res);
          this.bsModalRef.hide();
        });
  }


  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }
}
