import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, IUser } from '../../models/user';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { UtilService } from '../../services/util.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public users: User[];
  public email: string
  public password: string

  public user: IUser = new User(0, '', '', '', '', '', '', '')

  public isEmailValid: boolean
  public isPasswordValid: boolean

  constructor(
    private userService: UserService,
    private matDialog: MatDialog,
    private router: Router,
    private utilService: UtilService
  ) { }



  ngOnInit(): void {
  }

  login(): void {
    if (this.isEmailValid && this.isPasswordValid) {
      this.userService.getUserByEmail(this.email).subscribe(
        (response: any) => {
          this.user = response

          this.utilService.saveUserToLocalStorage(this.user)
          this.router.navigate(['/home'])
        }
      )
    }
  }

  checkEmail() {
    this.userService.getUserByEmail(this.email).subscribe(
      (response: any) => {
        this.user = response

        if (this.user.email === this.email) {
          this.isEmailValid = true
        }
      },
      error => {
        this.isEmailValid = false
      }
    )
  }

  checkPassword() {
    this.userService.getUserByEmail(this.email).subscribe(
      (response: any) => {
        this.user = response

        if (this.user.password === this.password) {
          this.isPasswordValid = true
        }
      },
      error => {
        this.isPasswordValid = false
      }
    )
  }

  openRegister(): void {
    const dialogRef: MatDialogRef<RegisterComponent, any> = this.matDialog.open(
      RegisterComponent,
      {
        role: 'dialog',
        height: '480px',
        width: '480px',
      })
    dialogRef.afterClosed().subscribe(result => {
      const { fname, lname, email, password, avatar } = result

      if (!result) return


    })
  }

}
