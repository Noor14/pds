import { Component, OnInit } from '@angular/core';
import { SharedModalsService } from '@shared/services/shared-modals.service';

@Component({
  selector: 'public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  isMainNavCollapsed = true;

  constructor(
    private sharedModalsService: SharedModalsService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('login: called');
    this.sharedModalsService.openLoginModal({
      sessionExpired: false,
      autoLogin: false,
      credentials: null
    });
  }
}
