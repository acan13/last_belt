import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { User } from './user'

@Injectable()
export class UserService {
  current_user = User

  constructor(
    private _http: Http
  ) { }

  createUser(user: User, callback, errorback){
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
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json()
        if (user) {
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
