import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service'
import { Router } from  '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _route: Router,
    private _location: Location
  ) { }

  ngOnInit(){
    this._userService.getCurrentUser(
      (user) => {
        if (!user){
          console.log('app module user',user)
          this._route.navigateByUrl('/')
          return
        }
        console.log('found a logged in user')
        if (this._route.url == '/'){
          console.log('url was root')
          this._route.navigateByUrl('/dashboard')
        }
      },
      (error) => {console.log(error)}

    )
  }
}
