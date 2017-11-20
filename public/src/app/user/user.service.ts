import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'

@Injectable()
export class UserService {
  current_user = null

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

}
