import { Component, OnInit } from '@angular/core';
import { List } from './../list'
import { UserService } from './../user/user.service'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { ListService } from './../list.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list = null
  lists = []
  current_user = null
  users = []

  constructor(
    private _userService:UserService,
    private _route:Router,
    private _listService:ListService
  ) { }

  ngOnInit() {
    this.list = new List
    this.current_user = this._userService.current_user
    this._userService.getUsers(
      (users) => {
        this.users = users
       },
      (error) => { console.log(error)}
    )
    this._listService.getLists(
      (lists) => {
        this.lists = lists
       },
      (error) => { console.log(error)}
    )
  }

  logout(){
    this._userService.logout(
      () => {this._route.navigateByUrl('/')},
      () => {}
    )
  }

  onSubmit(){
    this.list.creator = this.current_user.name
    this._listService.createList(this.list, this.current_user,
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
