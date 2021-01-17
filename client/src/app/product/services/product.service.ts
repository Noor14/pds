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
  IGetAllProductsSuccessData, IAddProductSuccessData
} from '../product.model';
import { productsRawMock } from '../products.mock';
import { productsSettings } from '../products.constant';
import { HttpService } from '@shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiAddProduct(productRaw: IProductRaw): Observable<any> {
    console.log('apiAddProduct:', productRaw);

    return this.httpService.post(`products`, productRaw)
      .pipe(
        map((data: IAddProductSuccessData) => {
          data.product = this.parseOneProduct(data.product);
          return data;
        })
      );
  }

  apiUpdateProduct(productRaw: IProductRaw): Observable<any> {
    console.log('apiUpdateProduct:', productRaw);

    return this.httpService.post(`products/${productRaw.id}`, productRaw)
      .pipe(
        map((data: IAddProductSuccessData) => {
          data.product = this.parseOneProduct(data.product);
          return data;
        })
      );
  }

  apiDeleteProduct(productRaw: IProductRaw): Observable<any> {
    console.log('apiDeleteProduct:', productRaw);

    return this.httpService.delete(`products/${productRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.product = this.parseOneProduct(data.product);
          return data;
        })
      );
  }

  apiGetOneProduct(productId: string): Observable<any> {
    console.log('apiGetOneProduct:', productId);

    return this.httpService.delete(`products/${productId}`)
      .pipe(
        map((data: any) => {
          data.product = this.parseOneProduct(data.product);
          return data;
        })
      );
  }

  apiFetchProductsList(): Observable<any> {
    // console.log('apiFetchProductsList:');
    return this.httpService.get(`products`)
      .pipe(

        // TODO remove when implemented from BE.
        map((data: IGetAllProductsSuccessData) => {
          data.products = data.products.length ? data.products : productsRawMock;
          return data;
        }),

        map((data: IGetAllProductsSuccessData) => {
          data.products = this.parseProducts(data.products);
          return data;
        })
      );
  }

  parseProducts(productsRaw: IProductRaw[]): IProduct[] {
    return productsRaw.map((productRaw: IProductRaw) => this.parseOneProduct(productRaw));
  }

  parseOneProduct(productRaw: IProductRaw): IProduct {
    const product = Object.assign({
      tp: 0,
      discountPercent: 0,
      companyName: '',
    }, productRaw);

    // TODO implement to find company name using companyId from company list.
    product.companyName = 'Abbott (Pvt) Ltd.';

    product.tp = +(product.mrp - (product.mrp * productsSettings.tpPercent / 100)).toFixed(2);
    product.discountPercent = +(product.net / (product.mrp - product.tp) * 100).toFixed(2);

    return product;
  }
}
