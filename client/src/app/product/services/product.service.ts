import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';

import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

import { productsSettings } from '../products.constant';
import {
  IProductParsed,
  IProductRaw,
  IGetAllProductsSuccessData, IAddProductSuccessData
} from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private endpoint = `products`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiAddOne(productRaw: IProductRaw): Observable<any> {
    // console.log('apiAddOne:', productRaw);

    return this.httpService.post(`${this.endpoint}`, productRaw)
      .pipe(
        map((data: IAddProductSuccessData) => {
          data.product = this.parseOne(data.product);
          return data;
        })
      );
  }

  apiUpdateOne(productRaw: IProductRaw): Observable<any> {
    // console.log('apiUpdateProduct:', productRaw);

    return this.httpService.post(`${this.endpoint}/${productRaw.id}`, productRaw)
      .pipe(
        map((data: IAddProductSuccessData) => {
          data.product = this.parseOne(data.product);
          return data;
        })
      );
  }

  apiDeleteOne(productRaw: IProductRaw): Observable<any> {
    // console.log('apiDeleteOne:', productRaw);

    return this.httpService.delete(`${this.endpoint}/${productRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.product = this.parseOneProduct(data.product);
          return data;
        })
      );
  }

  apiGetOne(productId: string): Observable<any> {
    // console.log('apiGetOne:', productId);

    return this.httpService.delete(`${this.endpoint}/${productId}`)
      .pipe(
        map((data: any) => {
          data.product = this.parseOne(data.product);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return this.httpService.get(`${this.endpoint}`, params)
      .pipe(

        // Use Mock data until BE implements real data.
        // map((data: IGetAllProductsSuccessData) => {
        //   data.products = data.products.length ? data.products : productsRawMock;
        //   return data;
        // }),

        map((data: IGetAllProductsSuccessData) => {
          data.products = this.parseList(data.products);
          return data;
        })
      );
  }

  parseList(productsRaw: IProductRaw[]): IProductParsed[] {
    // console.log('parseList:', productsRaw);
    return productsRaw.map((productRaw: IProductRaw) => this.parseOne(productRaw));
  }

  parseOne(productRaw: IProductRaw): IProductParsed {
    // console.log('parseOne:', productRaw);
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
