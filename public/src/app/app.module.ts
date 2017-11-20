import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service'


@NgModule({
  declarations: [
    AppComponent,
    UserNewComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
