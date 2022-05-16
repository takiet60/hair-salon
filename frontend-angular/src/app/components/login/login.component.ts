import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { RegisterComponent } from '../register/register.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService,
    private matDialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAllUsers()
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


}
