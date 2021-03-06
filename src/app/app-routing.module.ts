import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'projects', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'tasklists', redirectTo: 'tasklists', pathMatch: 'full' }
];

@NgModule({
  // forRoot, 根路由
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
