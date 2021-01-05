import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
