import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from "@angular/router";

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

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers()
    // this.checkUser(this.email,this.password);
  }

  login(form: NgForm): void {

  }

  openRegister(): void {

  }

  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public checkUser(email: any, password: any) {
    var a =1;
    for (var i=0;i<this.users.length;i++){
      if(this.users[i].email===email && this.users[i].password===password){
        a=2;
      }
    }
    if(a==2){
      this.router.navigate(['/', 'home']);
      // this.router.navigate(['home',email])
    }
    else{
      alert('Tài khoản hoặc mật khẩu bạn nhập sai!')
      // this.router.navigate(['/', 'watch']);

    }
  }
}
