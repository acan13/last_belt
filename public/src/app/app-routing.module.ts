import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserNewComponent } from './user/user-new/user-new.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  {path: '', pathMatch:'full', component:UserComponent, children: [
    { path: '', component:UserNewComponent}
  ]},

  {path:'user', component: UserComponent, children:[
    { path: 'new', component:UserNewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
