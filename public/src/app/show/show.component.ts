import { Component, OnInit } from '@angular/core';
import { ListService } from './../list.service'
import { ActivatedRoute, Router } from '@angular/router'
import { User } from './../user/user'
import { UserService } from './../user/user.service'


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  lists = []
  current_user = User
  target_user = User
  id = ""

  constructor(
    private _listService: ListService,
    private _route: ActivatedRoute,
    private _redirect: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    console.log('got to show')
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id')
    })
    this._userService.getUser(this.id,
      (user) => {
        this.target_user = user
       },
      (error) => { console.log(error)}
    )
    this._listService.getLists(
      (lists) => {
        this.lists = lists
       },
      (error) => { console.log(error)}
    )
    this.current_user = this._userService.current_user

  }

  logout(){
    this._userService.logout(
      () => {this._redirect.navigateByUrl('/')},
      () => {}
    )
  }

  check(id){
    this._listService.updateCheck(id,
      (list) => {
        console.log('list',list)
        this._listService.getLists(
          (lists) => {
            this.lists = lists
           },
          (error) => { console.log(error)}
        )
      },
      (err) => {console.log(err)}
    )
  }

}
