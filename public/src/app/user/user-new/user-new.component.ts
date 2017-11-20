import { Component, OnInit } from '@angular/core';
import { User } from './../user'
import { UserService } from './../user.service'
import { Router } from  '@angular/router'

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  user: User

  constructor(
    private _userService: UserService,
    private _route: Router
  ) { }

  ngOnInit() {
    this.user = new User()
  }

  onSubmit(){
    this._userService.createUser(this.user,
      (user) => {
        this._route.navigateByUrl('/dashboard')
      },
      (err) => {console.log(err)}
    )
    this.user = new User()
  }

}
