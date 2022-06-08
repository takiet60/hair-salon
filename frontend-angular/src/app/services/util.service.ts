import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public saveUserToLocalStorage(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user))
  }
}
