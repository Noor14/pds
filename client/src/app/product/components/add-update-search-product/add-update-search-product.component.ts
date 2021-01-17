import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { productTypes } from '@shared/constants/types.constant';
import { ECRUDModalModes, IAddUpdateSearchProductConfig, IProductRaw } from '../../product.model';
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
    public bsModalRef: BsModalRef,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  resetForm(): void {
    console.log('resetForm:');
  }

  submitForm(productData: IProductRaw) {
    this.productService.apiAddOne(productData)
      .subscribe((res: any) => {
        console.log('submit form : success', res);
      },
        (res: any) => {
        console.log('submit form : Failure', res);
      });
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Closed');
    this.bsModalRef.hide();
  }
}
