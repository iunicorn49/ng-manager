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
import { loadSvgResources } from '../utils/svg.util';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule // 最好放在最后, 动画的库一般来说刚开始是不做任何事情的, 而且, 还很大, 影响体验
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
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    if (parent) {
      throw new Error('模块已经存在, 不能再次加载!');
    }
    loadSvgResources(iconRegistry, sanitizer);
  }
}
