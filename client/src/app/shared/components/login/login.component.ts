import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ILoginModalConfig, ILoginPayload } from '@shared/components/login/login.model';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { any } from 'codelyzer/util/function';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public result = new EventEmitter();
  public config: ILoginModalConfig | undefined;

  formStatus = {
    sending: false,
    type: '',
    message: '',
  };

  data: ILoginPayload = {
    // username: '',
    // password: '',
    username: 'contactqaswads@gmail.com',
    password: 'qaswa',
  };

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {

    // DEV  - auto click
    // this.submitForm(this.loginForm);
  }

  onChangeCredentials() {
    this.resetFormStatus(false, '', '');
  }

  resetFormStatus(sending: boolean, type: string, message: string) {
    this.formStatus.sending = sending;
    this.formStatus.type = type;
    this.formStatus.message = message;
  }

  submitForm(loginForm: any): void {
    console.log('LoginComponent: submitForm:');

    // halt if farm data values are not valid.
    if (loginForm.invalid) {
      console.log('submitForm: form validation failing.');
      this.resetFormStatus(false, 'error', 'Please correct red marked fields values first.');
      return;
    }

    // TODO implement auth.apiDirectLogin()

    this.auth.apiDirectLogin(this.data)
      .subscribe((res: any) => {
        console.log('LoginComponent: submitForm: success', res);

        // proceed as success
        this.result.emit('success');
        this.bsModalRef.hide();

        this.router.navigate(['/app']);
      },
        (error: any) => {
          console.log('LoginComponent: submitForm: error', error);

          this.resetFormStatus(false, 'error', error);
        });
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Dismissed');
    this.bsModalRef.hide();
  }

}
