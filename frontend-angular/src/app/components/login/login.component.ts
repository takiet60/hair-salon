import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
<<<<<<< HEAD
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
=======

import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { HttpErrorResponse } from '@angular/common/http';
import {Router} from "@angular/router";

>>>>>>> 516befd723add2101935f01dc61838cb2b6d450d

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any[] = [];
  public users: User[];
  email: any;
  password: any;

<<<<<<< HEAD
  constructor(private userService: UserService,
    private matDialog: MatDialog,
    private router: Router) { }
=======

  constructor(private userService: UserService,
    private matDialog: MatDialog,private router: Router) { }

>>>>>>> 516befd723add2101935f01dc61838cb2b6d450d

  ngOnInit(): void {
    this.getAllUsers()
    // this.checkUser(this.email,this.password);
  }

  login(form: NgForm): void {

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

  public getAllUsers(): void {
    this.userService.getUserByEmail("anhkiet@gmail.com").subscribe(
      (response) => {
        console.log(response)
      }
    )
  }

  public checkUser(email: any, password: any) {
    var a = 1;
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].email === email && this.users[i].password === password) {
        a = 2;
      }
    }
    if (a == 2) {
      this.router.navigate(['/', 'home']);
      // this.router.navigate(['home',email])
    }
    else {
      alert('Tài khoản hoặc mật khẩu bạn nhập sai!')
      // this.router.navigate(['/', 'watch']);

    }
  }
}
