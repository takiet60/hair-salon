import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public saveUserToLocalStorage(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  public getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user')) || {};
  }

  public deleteUserInLocalStorage(key: string) {
    localStorage.removeItem(key)
  }

  public savePostToLocalStorage(post: IPost) {
    localStorage.setItem('post', JSON.stringify(post))
  }

  public getPostFromLocalStorage() {
    return JSON.parse(localStorage.getItem('post')) || {};
  }

  public deletePostInLocalStorage(key: string) {
    localStorage.removeItem(key)
  }

  public getTimeNow() {
    const now = new Date()
    const date = now.getDate().toString().length === 2
      ? now.getDate()
      : '0' + now.getDate()
    const month = (now.getMonth() + 1).toString().length === 2
      ? now.getMonth() + 1
      : '0' + (now.getMonth() + 1)
    const year = now.getFullYear()

    const hour = now.getHours().toString().length === 2
      ? now.getHours()
      : '0' + now.getHours()

    const minute = now.getMinutes().toString().length == 2
      ? now.getMinutes()
      : '0' + now.getMinutes()

    return `${date}/${month}/${year} ${hour}:${minute}`
  }
}
