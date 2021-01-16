import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';

import { AddUpdateSearchProductComponent } from '../components/add-update-search-product/add-update-search-product.component';
import {
  ECRUDModalModes,
  IAddUpdateSearchProductConfig,
  IProduct,
  IProductRaw,
  IProductResponseSuccess
} from '../product.model';
import { productsRawMock } from '../products.mock';
import { productsSettings } from '../products.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private utilService: UtilService,
  ) { }

  apiFetchProducts(): Observable<any> {

    // TODO implement http service call here.
    // const subscription = this.httpService.get();

    // use mock data for now
    const subscription = of({
      data: {
        products: productsRawMock,
        totalCount: 2000,
      }
    });

    return subscription
      .pipe(
        map((res: IProductResponseSuccess) => {
          let productsRaw = res.data.products;

          // for sample mock data. -  to see pagination in action.
          for (let i = 0; i < 5; i++) {
            productsRaw = productsRaw.concat(productsRaw);
          }

          return {
            products: this.parseProducts(productsRaw),
            totalCount: res.data.totalCount,
          };
        })
      );
  }

  parseProducts(productsRaw: IProductRaw[]): IProduct[] {
    const products: IProduct[] = [];
    let product: IProduct;
    productsRaw.forEach((productRaw: IProductRaw) => {
      product = Object.assign({
        tp: 0,
        discountPercent: 0,
        companyName: '',
      }, productRaw);

      // TODO implement to find company name using companyId from company list.
      product.companyName = 'Abbott (Pvt) Ltd.';

      product.tp = +(product.mrp - (product.mrp * productsSettings.tpPercent / 100)).toFixed(2);
      product.discountPercent = +(product.net / (product.mrp - product.tp) * 100).toFixed(2);
      products.push(product);
    });

    return products;
  }

  addProduct(productData: IProductRaw): Observable<any> {
    console.log('Product form submit data', productData);
    // use mock data for now
    const subscription = of({
      data: {
        products: productsRawMock,
        totalCount: 2000,
      }
    });

    return subscription
      .pipe(
        map((res: IProductResponseSuccess) => {
          let productsRaw = res.data.products;

          // for sample mock data. -  to see pagination in action.
          for (let i = 0; i < 5; i++) {
            productsRaw = productsRaw.concat(productsRaw);
          }

          return {
            products: this.parseProducts(productsRaw),
            totalCount: res.data.totalCount,
          };
        })
      );
  }
}
