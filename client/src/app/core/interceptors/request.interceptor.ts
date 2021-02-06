import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('RequestInterceptor: intercept', request);
    const userToken = 'secure-user-token';
    const modifiedRequest = request.clone({
      // responseType: 'json',
      withCredentials: true,
      headers: request.headers.set('Authorization', `Bearer ${userToken}`),
    });

    return next.handle(modifiedRequest);
  }
}
