import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  items: string[];

  constructor() { }

  ngOnInit() {
    const nums = [];
    let i = 1;
    while (i <= 16) {
      nums.push(i);
      i++;
    }
    this.items = nums.map(item => `avatars:svg-${item}`);
  }

}
