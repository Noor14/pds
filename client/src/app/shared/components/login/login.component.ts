import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

import { ILoginModalConfig, ILoginPayload } from '@shared/components/login/login.model';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public result = new EventEmitter();
  public config: ILoginModalConfig | undefined;

  data: ILoginPayload = {
    username: 'qaswa-admin',
    password: '',
  };

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submitForm(loginForm: any): void {
    console.log('submitForm:');

    // halt if farm data values are not valid.
    if (loginForm.invalid) {
      console.log('submitForm: form validation failing.');
      return;
    }

    // TODO implement auth.apiDirectLogin()
    this.result.emit('success');
    this.bsModalRef.hide();

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
