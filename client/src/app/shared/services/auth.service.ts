import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@shared/services/http.service';
import { IUserCommonRaw } from '@shared/models/users.model';
import { ILoginPayload } from '@shared/components/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = `auth`;

  constructor(
    private httpService: HttpService,
  ) { }

  apiDirectLogin(loginData:any): Observable<any> {
    console.log('apiDirectLogin:', loginData);

    // return of({
    //   user: {
    //     username: 'qaswa-admin',
    //     email: 'qaswa-admin',
    //     type: 'doctor',
    //     contact: '03458759346',
    //     address: 'ABC 2K, Karachi',
    //   },
    //   status: true,
    // })

   return this.httpService.post(`${this.endpoint}/login`, loginData)
      .pipe(
        map((data: any) => {
          console.log('apiDirectLogin: success', data);

          // store stuff to local storage for later use of request interceptor/
          window.localStorage.setItem('user', JSON.stringify(data.user));
          window.localStorage.setItem('accessToken', data.accessToken);

          return data;
          },
          (error: any) => {
            console.log('apiDirectLogin: error', error);
            return error;
          }
        )
      );
  }

  apiDirectLogout(): Observable<any> {
    console.log('apiDirectLogout:');

    // return of({
    //   status: true,
    // })

   return this.httpService.post(`${this.endpoint}/logout`, null)
      .pipe(
        map((data: any) => {
            console.log('apiDirectLogout: success', data);

            // destroy access token from app
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('accessToken');

            return data;
          },
          (error: any) => {
            console.log('apiDirectLogout: error', error)
            return error;
          }
        )
      );
  }
}
