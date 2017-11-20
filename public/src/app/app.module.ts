import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { ListService } from './list.service'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowComponent } from './show/show.component'


@NgModule({
  declarations: [
    AppComponent,
    UserNewComponent,
    UserComponent,
    DashboardComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
