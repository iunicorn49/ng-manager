/**
 * 需求, 系统中只加载一次
 * SkipSelf 避免重复注入, 去系统的父级找依赖.
 * Optional 让 SkipSelf 作为可选, 在第一次注入时, 系统并没有CoreModule的时候, 注入成功
 */
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在, 不能再次加载!');
    }
  }
}
