import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';
import {
  IAddUpdateOrderSuccessData,
  IGetAllOrdersSuccessData, IOrderParsed,
  IOrderRaw
} from '@root/app/order/orders.model';
import { statusTypes } from '@root/app/order/orders.constant';
import { ordersRawMock } from '@root/app/order/orders.mock';
import { productsSettings } from '@root/app/product/products.constant';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private endpoint = `orders`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) { }

  apiAddOne(orderRaw: IOrderRaw): Observable<any> {
    // console.log('apiAddOne:', orderRaw);
    return of({
      order: orderRaw
    })
    // return this.httpService.post(`${this.endpoint}`, orderRaw)
      .pipe(
        map((data: IAddUpdateOrderSuccessData) => {
          data.order = this.parseOne(data.order);
          return data;
        })
      );
  }

  apiUpdateOne(orderRaw: IOrderRaw): Observable<any> {
    // console.log('apiUpdateOrder:', orderRaw);
    return of({
      order: orderRaw
    })
    // return this.httpService.put(`${this.endpoint}/${orderRaw.id}`, orderRaw)
      .pipe(
        map((data: IAddUpdateOrderSuccessData) => {
          data.order = this.parseOne(data.order);
          return data;
        })
      );
  }

  apiDeleteOne(orderRaw: IOrderRaw): Observable<any> {
    // console.log('apiDeleteOne:', orderRaw);
    return of({
      order: orderRaw
    })
    // return this.httpService.delete(`${this.endpoint}/${orderRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.order = this.parseOneOrder(data.order);
          return data;
        })
      );
  }

  apiGetOne(orderId: string): Observable<any> {
    // console.log('apiGetOne:', orderId);
    return of({
      order: ordersRawMock[0]
    })
    // return this.httpService.delete(`${this.endpoint}/${orderId}`)
      .pipe(
        map((data: any) => {
          data.order = this.parseOne(data.order);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return of({
      orders: ordersRawMock,
      totalCount: 2000,
    })
    // return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        map((data: IGetAllOrdersSuccessData) => {
          data.orders = this.parseList(data.orders);
          return data;
        })
      );
  }

  parseList(ordersRaw: IOrderRaw[]): IOrderParsed[] {
    // console.log('parseList:', ordersRaw);
    return ordersRaw.map((orderRaw: IOrderRaw) => this.parseOne(orderRaw));
  }

  parseOne(orderRaw: IOrderRaw): IOrderParsed {
    // console.log('parseOne:', orderRaw);
    const order = Object.assign({
      customStatus: '',
      customOrderAmount: 0,
      customStoreName: '',
      customStoreContact: '',
    }, orderRaw);

    order.customStatus = statusTypes[order.status];

    order.customOrderAmount = !order.tpPercent ? 0 : order.productsSnapshot.reduce((result, product) => {

      // generate TP price, against which the product was sold, in the order.
      // use the record tpPercent field
      return +(product.mrp - (product.mrp * (order.tpPercent || 0) / 100)).toFixed(2);
    }, 0);

    // TODO implement these
    order.customStoreName = '';
    order.customStoreContact = '';

    return order;
  }
}

