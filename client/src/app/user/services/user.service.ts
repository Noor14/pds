import { Injectable } from '@angular/core';
import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import {
  IAddUserSuccessData,
  IGetAllUsersSuccessData,
  IUserParsed,
  IUserPayload,
  IUserRaw
} from '@root/app/user/users.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { usersRawMock } from '@root/app/user/users.mock';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = `users`;

  constructor(
    private utilService: UtilService,
    private httpService: HttpService,
  ) {
  }

  apiAddOne(userRaw: IUserPayload): Observable<any> {
    // console.log('apiAddOne:', userRaw);
    // return of({
    //   user: userRaw
    // })
    return this.httpService.post(`${this.endpoint}`, userRaw)
      .pipe(
        map((data: IAddUserSuccessData) => {
          data.user = this.parseOne(data.user);
          return data;
        })
      );
  }

  apiUpdateOne(userId: number, userRaw: IUserPayload): Observable<any> {
    // console.log('apiUpdateUser:', userRaw);
    // return of({
    //   user: userRaw
    // })
    return this.httpService.post(`${this.endpoint}/${userId}`, userRaw)
      .pipe(
        map((data: IAddUserSuccessData) => {
          data.user = this.parseOne(data.user);
          return data;
        })
      );
  }

  apiDeleteOne(userRaw: IUserRaw): Observable<any> {
    // console.log('apiDeleteOne:', userRaw);
    return of({
      user: usersRawMock[0]
    })
      // return this.httpService.delete(`${this.endpoint}/${userRaw.id}`)
      .pipe(
        map((data: any) => {
          // data.user = this.parseOneUser(data.user);
          return data;
        })
      );
  }

  apiGetOne(userId: string): Observable<any> {
    // console.log('apiGetOne:', userId);
    return of({
      user: usersRawMock[0]
    })
      // return this.httpService.delete(`${this.endpoint}/${userId}`)
      .pipe(
        map((data: any) => {
          data.user = this.parseOne(data.user);
          return data;
        })
      );
  }

  apiGetList(params: IHttpMethodQueryParams): Observable<any> {
    // console.log('apiGetList:');
    return of({
      users: usersRawMock,
      totalCount: usersRawMock.length,
    })
      // return this.httpService.get(`${this.endpoint}`, params)
      .pipe(
        map((data: IGetAllUsersSuccessData) => {
          data.users = this.parseList(data.users);
          return data;
        })
      );
  }

  parseList(usersRaw: IUserRaw[]): IUserParsed[] {
    // console.log('parseList:', usersRaw);
    return usersRaw.map((userRaw: IUserRaw) => this.parseOne(userRaw));
  }

  parseOne(userRaw: IUserRaw): IUserParsed {
    // console.log('parseOne:', userRaw);
    const user = Object.assign({
      name: '',
      totalSaleAmount: 0,
      totalOrders: 0,

      customAreaName: '',
      customPersons: '',
    }, userRaw);

    user.name = user.userInfo.name;
    user.totalSaleAmount = user.userInfo.totalSaleAmount;
    user.totalOrders = user.userInfo.totalOrders;

    user.customAreaName = ''; // TODO implement area name
    user.customPersons = user.userInfo.persons[0].phone.join('<br>');

    return user;
  }
}
