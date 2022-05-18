import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any[] = [];
  // public users: User[];
  email: any;
  password: any;

  constructor(private userService: UserService,
    private matDialog: MatDialog,
    private router: Router) { }



  ngOnInit(): void {
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

  public getUserByEmail(email: string): any {
    this.userService.getUserByEmail(email).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }

  public checkUser(email: any, password: any) {

    const user = this.getUserByEmail(email)
    console.log(user)


  }
}
