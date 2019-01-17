import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supportsystem',
  templateUrl: './supportsystem.component.html',
  styleUrls: ['./supportsystem.component.css']
})
export class SupportsystemComponent implements OnInit {

  public states = ['Maharashtra', 'Gujarat', 'Uttar Pradesh'];
  constructor() { }

  ngOnInit() {
  }

}
