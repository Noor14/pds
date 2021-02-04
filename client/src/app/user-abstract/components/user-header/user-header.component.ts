import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  isMainNavCollapsed = true;

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.apiDirectLogout()
      .subscribe((res: any) => {
          console.log('logout: success', res);
        },
        (error: any) => {
          console.log('logout: error', error);
        });

    window.localStorage.setItem('user', '');
    this.router.navigate(['/']);
  }
}
