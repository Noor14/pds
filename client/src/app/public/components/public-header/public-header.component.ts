import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  isMainNavCollapsed = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('login: called');
    window.localStorage.setItem('user', '{ firstName: "Dr. Abu Bakar"}');
    this.router.navigate(['/user']);
  }
}
