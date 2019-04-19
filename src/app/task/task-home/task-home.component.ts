import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      name: '待办',
      id: 1,
      tasks: [
        {
          id: 1,
          desc: '啦啦啦德玛西亚',
          completed: true,
          reminder: new Date(),
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '啦啦啦德玛西亚',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      name: '已完成',
      id: 2,
      tasks: [
        {
          id: 1,
          desc: '啦啦啦德玛西亚',
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '啦啦啦德玛西亚',
          completed: true,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        }
      ]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  handleNewTaskList() {

  }
}
