import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {
  items = [
    {
      id: 1,
      name: 'zhangsan'
    },
    {
      id: 2,
      name: 'lisi'
    },
    {
      id: 3,
      name: 'wangwu'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}) { // 格式化显示的label, value绑定一个对象, 展示对象的name
    return user ? user.name : '';
  }

  onClick() { // 保存按钮

  }

}
