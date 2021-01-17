import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IHttpMethodQueryParams } from '@shared/services/http.service.model';
import { environment } from '@root/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }

  generateAPIURL(endpoint: string) : string {
    return `${environment.apiBaseURL}/${endpoint}`;
  }

  get(endpoint: string, params?: IHttpMethodQueryParams) : Observable<any> {
    const apiURL = this.generateAPIURL(endpoint);
    return this.http.get(apiURL, { params: params });
  }

  post(endpoint: string, body: any, params?: IHttpMethodQueryParams) : Observable<any> {
    const apiURL = this.generateAPIURL(endpoint);
    return this.http.post(apiURL, body, { params: params });
  }

  put(endpoint: string, body: any, params?: IHttpMethodQueryParams) : Observable<any> {
    const apiURL = this.generateAPIURL(endpoint);
    return this.http.put(apiURL, body, { params: params });
  }

  delete(endpoint: string, params?: IHttpMethodQueryParams) : Observable<any> {
    const apiURL = this.generateAPIURL(endpoint);
    return this.http.delete(apiURL, { params: params });
  }
}
