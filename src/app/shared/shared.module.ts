/**
 * 共享模块的职责, 将多个组件需要的依赖导入进来, 再一起导出出去
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatSlideToggleModule, MatGridListModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

const MODULE_LIST = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULE_LIST,
  ],
  exports: [
    ...MODULE_LIST,
  ]
})
export class SharedModule { }
