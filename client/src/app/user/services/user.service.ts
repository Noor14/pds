import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { HttpService } from '@shared/services/http.service';
import { IHttpMethodQueryParams } from '@shared/services/http.service.model';

import {
  IAddUserSuccessData,
  IGetAllUsersSuccessData,
  ITeamUserParsed, ITeamUserPayload,
  ITeamUserRaw
} from '@root/app/user/users.model';
import { usersRawMock } from '@root/app/user/users.mock';

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

  apiAddOne(userRaw: ITeamUserPayload): Observable<any> {
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

  apiUpdateOne(userId: number, userRaw: ITeamUserPayload): Observable<any> {
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

  apiDeleteOne(userId: number): Observable<any> {
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

  apiGetOne(userId: number): Observable<any> {
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

  parseList(usersRaw: ITeamUserRaw[]): ITeamUserParsed[] {
    // console.log('parseList:', usersRaw);
    return usersRaw.map((userRaw: ITeamUserRaw) => this.parseOne(userRaw));
  }

  parseOne(userRaw: ITeamUserRaw): ITeamUserParsed {
    // console.log('parseOne:', userRaw);
    const user = Object.assign({
      customType: '',
      customAreaName: '',
      customStatus: '',

      customFullName: '',
      customContacts: '',
    }, userRaw);


    // TODO implement custom fields.
    user.customAreaName = '';

    return user;
  }
}
