import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { filter, finalize, map, retry, tap } from 'rxjs/operators';

import { UtilService } from '@shared/services/util.service';
import { SharedModalsService } from '@shared/services/shared-modals.service';
import { IHttpAPIResponse } from '@shared/services/http.service.model';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(
    private utilService: UtilService,
    private sharedModalsService: SharedModalsService,
  ) {}

  // intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    console.log('ResponseInterceptor:', req);

    // const started = Date.now();
    // let result: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(

        // skip res/event if it is not an actual response tick
        filter((res: any) => res instanceof HttpResponse),

        // skip if it is a third-party API / Ajax call response (i.e. is NOT our internal app API call)
        filter((res: HttpResponse<any>) => this.utilService.isInternalAppAPICall(req.url)),

        /* === proceed to evaluate internal API call === */

        // check to handle 403 failed requests i.e. no or expired session
        // map((res: any) => {
        //   console.log('ResponseInterceptor: map:', res);
        //
        //   // TODO handle 403 session expire here
        //   // if (res.status === 403) {
        //   if (res.status === 200) { // for testing only
        //     console.log('ResponseInterceptor: No or Expired Session.', res);
        //
        //     // open login prompt, and onSuccess retry the failed request to proceed to its .subscribe()
        //     return this.sharedModalsService.openLoginModal({
        //       sessionExpired: true,
        //       autoLogin: false,
        //       credentials: null
        //     })
        //       .pipe(retry(1))
        //   }
        //
        //   return res;
        // }),

        // check if its as successful response or a failure one.
        map((res: any) => {
          console.log('ResponseInterceptor: response:', res);

          // case: error response. inform subscription by throwing an error.
          // if (!res.body.success) {
          if (res.body.success) {
            return throwError(new Error(res.body.data));
          }

          // case: successful response. transform to omit extra information.
          return res.body.data;
        }),
      )
      // .pipe(
        // tap(
        //   // Succeeds when there is a response; ignore other events
        //   event => result = event instanceof HttpResponse ? 'succeeded' : '',
        //
        //   // Operation failed; error is an HttpErrorResponse
        //   error => result = 'failed'
        // ),
        //
        // // Log when response observable either completes or errors
        // finalize(() => {
        //   const elapsed = Date.now() - started;
        //   const message = `${req.method} "${req.urlWithParams}" ${result} in ${elapsed} ms.`;
        //
        //   console.log('ResponseInterceptor: finalize: ', message);
        // })
      // );
  }
}
