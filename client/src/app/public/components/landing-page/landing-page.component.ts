import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  slides = [
    {image: 'assets/images/nature/1.jpg', text: 'First'},
    {image: 'assets/images/nature/2.jpg', text: 'Second'},
    {image: 'assets/images/nature/3.jpg', text: 'Third'}
  ];
  noWrapSlides = false;
  showIndicator = true;
  ngOnInit(): void {
  }
}
