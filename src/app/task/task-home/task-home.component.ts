import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';

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
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  handleNewTaskList() {

  }

  launchNewTaskDialog() {
    const data = {
      title: '新增任务'
    };
    const dialogRef = this.dialog.open(NewTaskComponent, {data});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateTaskDialog(task) {
    const data = {
      title: '修改任务', task
    };
    const dialogRef = this.dialog.open(NewTaskComponent, {data});
  }
}
