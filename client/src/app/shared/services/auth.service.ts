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

  apiDirectLogin(loginData:any): Observable<any> {
    console.log('apiAddOne:', loginData);

    return of({
      user: {
        username: 'qaswa-admin',
        email: 'qaswa-admin',
        type: 'doctor',
        contact: '03458759346',
        address: 'ABC 2K, Karachi',
      },
      status: true,
    })

    this.httpService.get(`${this.endpoint}`, loginData)
      .pipe(
        map((data: any) => {
            console.log('login Success', data);
            return data
          },
          (error: any) => {
            console.log('login error', error)
            return error
          }
        )
      );
  }
}
