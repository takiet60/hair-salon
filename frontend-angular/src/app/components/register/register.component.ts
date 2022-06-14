import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User, IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userModel: IUser = new User(0, '', '', '', '', '', '', '')
  public isValidEmail: boolean

  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
    private userService: UserService,
    private utilService: UtilService,
    private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister() {
    this.userModel.imgUrl
      ? this.userModel.imgUrl
      : this.userModel.imgUrl = 'https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png'
    this.userService.addUser(this.userModel)
    this.utilService.saveUserToLocalStorage(this.userModel)
    this.router.navigate(['/home'])
  }

  checkIsValidEmail() {
    this.userService.getUserByEmail(this.userModel.email)
      ? this.isValidEmail = false
      : this.isValidEmail = true
  }
}
