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
    const userToken = window.localStorage.token || undefined;

    const isLogin = request.url.indexOf('login');
    const isLogout = request.url.indexOf('logout');

    if (isLogin && userToken) headers = request.headers.set('Authorization', `Bearer ${userToken}`);
    if (isLogout && userToken) window.localStorage.token = null;

    const modifiedRequest = request.clone({
      withCredentials: true,
      headers
    });

    return next.handle(modifiedRequest);
  }
}
