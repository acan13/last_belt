import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user/user'
import { List } from './list'

@Injectable()
export class ListService {
  list = null
  lists = []

  constructor(
    private _http: Http
  ) { }

  createList(list: List, user, callback, errorback){
    console.log('running create list')
    this._http.post(`/users/${user._id}/lists`,list).subscribe(
      (res) => {callback(res.json())},
      (err) => {callback(err)}
    )
  }

  getLists(callback, errorback){
    console.log('running get lists')
    this._http.get('/lists').subscribe(
      (res) => {
        const lists = res.json()
        this.lists = lists
        console.log('lists:',lists)
        callback(lists)
      },
      (err) => {
        errorback(err)
      }
    )
  }
}
