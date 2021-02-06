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

  private endpoint = `login`;


  constructor(
    private httpService: HttpService,
  ) { }

  /**
   * Login
   * @param loginData
   */
  apiDirectLogin(loginData:any): Observable<any> {
    console.log('apiAddOne:', loginData);

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

   return this.httpService.post('login', loginData)
      .pipe(
        map((data: any) => {
            console.log('login Success', data);
            return data;
          },
          (error: any) => {
            console.log('login error', error);
            return error;
          }
        )
      );
  }

  /**
   * Logout
   */
  apiDirectLogout(): Observable<any> {
    // return of({
    //   status: true,
    // })

   return this.httpService.post('logout', null)
      .pipe(
        map((data: any) => {
            console.log('logut Success service', data);
            return data;
          },
          (error: any) => {
            console.log('logut error service', error)
            return error;
          }
        )
      );
  }
}
