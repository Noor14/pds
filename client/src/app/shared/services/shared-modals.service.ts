import { EventEmitter, Injectable } from '@angular/core';

import { UtilService } from '@shared/services/util.service';

import { LoginComponent } from '@shared/components/login/login.component';
import { ILoginModalConfig } from '@shared/components/login/login.model';


@Injectable({
  providedIn: 'root'
})
export class SharedModalsService {
  // private openedLoginPrompt$;

  constructor(
    private utilService: UtilService,
  ) { }

  // TODO implement to serve one login-prompt at a time.
  openLoginModal(config: ILoginModalConfig): EventEmitter<any> {
    return this.utilService.modal(LoginComponent, config, { class: 'modal-sm' });

    // check if already opened prompt, serve that same one login-prompt at a time.
    // if (this.openedLoginPrompt$) {
    //   return this.openedLoginPrompt$;
    // }

    // return this.openedLoginPrompt$ = this.utilService.modal(LoginComponent, config, { class: 'modal-sm' })
      // .pipe();
  }
}
