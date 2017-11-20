import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'

@Injectable()
export class UserService {
  current_user = User
  users = []
  target_user = User

  constructor(
    private _http: Http
  ) { }

  createUser(user: User, callback, errorback){
    console.log('running create user')
    this._http.post('/users', user).subscribe(
      (res) => {
        const user = res.json()
        this.current_user = user
        callback(this.current_user)
      },
      (err) => {errorback(err)}
    )
  }

  getCurrentUser(callback, errorback){
    console.log('running get current user')
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json()
        console.log('user',user)
        if (user) {
          console.log('did it run this?')
          this.current_user = user
        }
        callback(user)
      },
      (err) => {
        errorback(err)
      }
    )
  }

  logout(callback, errorback){
    console.log('running logout')
    this._http.get('/sessions/delete').subscribe(
      (res) => {
        this.current_user = null
        callback(res.json())
      },
      (err) => {
        errorback(err)
      }
    )
  }

  getUsers(callback, errorback){
    console.log('running get users')
    this._http.get('/users').subscribe(
      (res) => {
        const users = res.json()
        console.log('users',users)
        this.users = users
        callback(users)
      },
      (err) => {
        errorback(err)
      }
    )
  }

  getUser(id, callback, errorback){
    console.log('running get user')
    this._http.get(`/users/${id}`).subscribe(
      (res) => {
        const target_user = res.json()
        console.log('target user',target_user)
        this.target_user = target_user
        callback(target_user)
      },
      (err) => {
        errorback(err)
      }
    )
  }

}
