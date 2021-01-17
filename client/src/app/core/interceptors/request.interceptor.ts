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
    console.log('RequestInterceptor: intercept', request);

    const modifiedRequest = request.clone({
      // responseType: 'json',
      withCredentials: true,
    });

    return next.handle(modifiedRequest);
  }
}
