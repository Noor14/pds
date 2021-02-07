import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpHeaders,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers;

    // console.log('RequestInterceptor: intercept', request);

    // TODO - create localStorage service, and make flag name dynamic feeding from one place. e.g. settings
    const accessToken = window.localStorage.getItem('accessToken') || undefined;

    const isLogin = request.url.indexOf('login') >= 0;
    // const isLogout = request.url.indexOf('logout') >= 0;

    if (accessToken && !isLogin) headers = request.headers.set('Authorization', `Bearer ${accessToken}`);
    // if (isLogout && accessToken) window.localStorage.token = null;

    const modifiedRequest = request.clone({
      withCredentials: true,
      headers,
    });

    return next.handle(modifiedRequest);
  }
}
