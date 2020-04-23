import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Angular Material 9.2.1 - Unlocked';
  icon = 'vpn_key';

  constructor() { }

  ngOnInit(): void {
  }

}
