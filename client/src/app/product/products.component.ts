import { Component, OnInit } from '@angular/core';

import { IConfirmConfig, UtilService } from '@shared/services/util.service';
import { ITableConfig } from '@shared/components/table/table.model';

import { ProductService } from './services/product.service';
import { IProduct, IProductResponseSuccess } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  rows: IProduct[] = [];
  columns = [
    // { name: 'Product ID', prop: 'id',},
    { name: 'Batch #', prop: 'batchNumber'},
    { name: 'Name', prop: 'name'},
    { name: 'Generic', prop: 'generic'},
    // { name: 'Type', prop: 'type',},
    { name: 'Pack', prop: 'packInfo'},
    { name: 'T.P', prop: 'tp'},
    { name: 'M.R.P', prop: 'mrp'},
    { name: 'Discount (%)', prop: 'discountPercent'},
    { name: 'Net', prop: 'net'},
    { name: 'Box Quantity', prop: 'boxQuantity'},
    { name: 'Company', prop: 'companyName'},
    ];
  actions = [
    { name: 'View / Edit', handler: this.editProduct.bind(this)},
    { name: 'Delete', handler: this.deleteProduct.bind(this)},
  ];

  config: ITableConfig = {
    advanceSearchItem: {
      buttonText: 'Advance Search',
      handler: this.searchProduct.bind(this),
    },
    addItem: {
      buttonText: 'Add Product',
      handler: this.addProduct.bind(this),
    }
  };

  constructor(
    private productService: ProductService,
    private utilService: UtilService,
  ) { }

  ngOnInit(): void {

    this.fetchProducts();

    // DEV - auto opener - deleteProduct
    // this.deleteProduct({}, 0);

    // DEV - auto opener - addProduct
    this.addProduct();

    // DEV - auto opener - alert
    // this.utilService.alert({
    //   isError: false,
    //   headingText: '',
    //   message: 'This is a sample alert message for the action you just called.',
    //   approveButtonText: 'OK'
    // });
  }

  fetchProducts(): void {
    console.log('fetchProducts:');
    this.productService.apiFetchProducts()
      .subscribe((res: { products: IProduct[], totalCount: number }) => {
        console.log('fetchProducts: success', res.products);

        this.rows = res.products;
      }, (reason: string) => {
        console.log('fetchProducts: error');
      });
  }

  searchProduct(): void {
    console.log('searchProduct:');
    this.productService.openSearchProduct()
      .subscribe((res: any) => {
        console.log('searchProduct: success', res);

        // here to render the search results and trigger table change.
        //...
      });
  }

  addProduct(): void {
    console.log('addProduct:');
    this.productService.openAddProduct();
  }

  editProduct(product: any, productIdx: number): void {
    console.log('editProduct:', productIdx, product);

    this.productService.openEditProduct(product)
      .subscribe((res: any) => {
        console.log('editProduct: success', res);

        // here to refresh the table, or update the target product object and trigger table change.
        //...
      });
  }

  deleteProduct(product: any, productIdx: number): void {
    console.log('deleteProduct:', productIdx, product);

    const config: IConfirmConfig = {
      message: 'Are you sure you want to delete this product from system ?',
      approveButtonText: 'Delete',
      declineButtonText: 'Decline',
    };

    this.utilService.confirm(config)
      .subscribe((res: any) => {
        console.log('confirm: approve', res);

      }, (reason: string) => {
        console.log('confirm: decline');
      });
  }
}
