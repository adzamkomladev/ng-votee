import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  get currentYear(): number {
    return new Date().getFullYear();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
