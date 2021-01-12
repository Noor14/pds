import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contact = {
        username: '',
        email: '',
        message: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  public submitContact(data: any): any {
    console.log('ddddd', data);
  }
}
