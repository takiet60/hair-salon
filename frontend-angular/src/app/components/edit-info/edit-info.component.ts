import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {

  public userModel: any
  public isShowNotify: boolean = false

  constructor(
    private router: Router,
    private utilService: UtilService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
    console.log(this.userModel)
  }

  saveInfoUser() {
    this.userService.updateUser(this.userModel).subscribe(
      (response) => {
        this.userModel = response
        console.log(this.userModel)
        this.utilService.deleteUserInLocalStorage('user')
        this.utilService.saveUserToLocalStorage(this.userModel)
      }
    )

    this.isShowNotify = true

    setTimeout(() => {
      this.isShowNotify = false
    }, 3000)
  }

  goToProfile(id) {
    this.router.navigate(['profile', id]);
  }


  goToEditInfo() {
    this.router.navigate(['/editInfo'])
  }

  logout() {
    this.utilService.deleteUserInLocalStorage('user')
    this.router.navigate(['/login'])
  }
}
