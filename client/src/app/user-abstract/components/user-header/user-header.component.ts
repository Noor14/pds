import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  isMainNavCollapsed = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('logout:');
    window.localStorage.setItem('user', '');
    this.router.navigate(['/']);
  }
}
