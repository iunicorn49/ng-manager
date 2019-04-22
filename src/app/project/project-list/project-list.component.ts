import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/0.jpg'
    },
    {
      name: '自动化测试项目',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/1.jpg'
    }
  ];
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新增任务'}});
    dialogRef.afterClosed().subscribe(result => console.log('result:', result));
    console.log('dialogRef', dialogRef);
  }

  launchInviteDialog() { // 打开邀请对话框
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log('InviteComponentClose:', result));
  }

  launchUpdateDialog() {
    const data = {title: '编辑任务'};
    const dialogRef = this.dialog.open(NewProjectComponent, {data});
    dialogRef.afterClosed().subscribe(result => console.log('result:', result));
  }
}
