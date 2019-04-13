import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit(); // 发射一个叫做 'toggle' 的事件, 由父组件监听
  }

  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }
}
