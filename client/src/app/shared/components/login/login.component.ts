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
  loading = false;
  submitted = false;
  data: ILoginPayload = {
    username: 'qaswa-admin',
    password: 'test',
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

  submitForm(loginForm: any): void {
    console.log('submitForm:');

    // halt if farm data values are not valid.
    if (loginForm.invalid) {
      console.log('submitForm: form validation failing.');
      return;
    }

    // TODO implement auth.apiDirectLogin()

    this.auth.apiDirectLogin(loginForm.value)
      .subscribe((res: any) => {
        console.log('login: success', res);

          this.result.emit('success');
          this.bsModalRef.hide();
      },
        (error: any) => {
          console.log('login: error', error);

          // refresh table to load latest records.
        });
    // proceed as success
    window.localStorage.setItem('user', '{ firstName: "Dr. Abu Bakar"}');
    this.router.navigate(['/user']);
  }

  closeModal() {
    // console.log('closeModal:');
    this.result.error('Dismissed');
    this.bsModalRef.hide();
  }

}
