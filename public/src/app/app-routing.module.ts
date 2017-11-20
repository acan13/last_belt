import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNewComponent } from './user/user-new/user-new.component'
import { UserComponent } from './user/user.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ShowComponent } from './show/show.component'

const routes: Routes = [
  {path: '', pathMatch:'full', component:UserComponent, children: [
    { path: '', component:UserNewComponent}
  ]},
  {path: 'user/:id', component:ShowComponent},

  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
