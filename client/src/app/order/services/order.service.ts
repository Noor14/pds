import { EventEmitter, Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { AddUpdateSearchOrderComponent } from '../components/add-update-search-order/add-update-search-order.component';
import { ECRUDModalModes, IAddUpdateSearchOrderConfig } from '../orders.model';
import { HttpService } from '@shared/services/http.service';
import {
  IAddUpdateOrderSuccessData,
  IGetAllOrdersSuccessData, IOrderParsed,
  IOrderRaw
} from '@root/app/order/orders.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';
import { companiesMock } from '@root/app/other-parties/components/companies/companies.mock';
import { ICompanyRaw } from '@root/app/other-parties/components/companies/companies.model';

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

    return this.httpService.post(`${this.endpoint}`, orderRaw)
      .pipe(
        map((data: IAddUpdateOrderSuccessData) => {
          data.order = this.parseOne(data.order);
          return data;
        })
      );
  }

  apiUpdateOne(orderRaw: IOrderRaw): Observable<any> {
    // console.log('apiUpdateOrder:', orderRaw);

    return this.httpService.put(`${this.endpoint}/${orderRaw.id}`, orderRaw)
      .pipe(
        map((data: IAddUpdateOrderSuccessData) => {
          data.order = this.parseOne(data.order);
          return data;
        })
      );
  }

  apiDeleteOne(orderRaw: IOrderRaw): Observable<any> {
    // console.log('apiDeleteOne:', orderRaw);

    return this.httpService.delete(`${this.endpoint}/${orderRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.order = this.parseOneOrder(data.order);
          return data;
        })
      );
  }

  apiGetOne(orderId: string): Observable<any> {
    // console.log('apiGetOne:', orderId);

    return this.httpService.delete(`${this.endpoint}/${orderId}`)
      .pipe(
        map((data: any) => {
          data.order = this.parseOne(data.order);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return this.httpService.get(`${this.endpoint}`, params)
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
      companyName: '',
      discountPercent: 0,
    }, orderRaw);

    // order.customTP = +(order.mrp - (order.mrp * ordersSettings.tpPercent / 100)).toFixed(2);
    // order.customDiscountPercent = +(order.net / (order.mrp - order.customTP) * 100).toFixed(2);

    return order;
  }
}

