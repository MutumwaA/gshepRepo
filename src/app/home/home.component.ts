import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  heading: any;
  subheading: any;
  ngOnInit() {
    this.heading = "Soaring to new heights";
    this.subheading = "GRANT SAFETY HEALTH AND ENVIRONMENTAL PRACTITIONERS.";
  }

}
