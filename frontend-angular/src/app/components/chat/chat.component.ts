import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public userModel: any
  public users: any

  public searchText: ''
  public isShowSearchHint = false
  public searchHints: IUser[]

  constructor(
    private router: Router,
    private utilService: UtilService,

  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
  }

  showHints() {
    if (this.searchText.length) {
      this.isShowSearchHint = true
      this.searchHints = this.users.filter(
        (item) => {
          return item.firstName.toLowerCase().includes(this.searchText.toLowerCase()) ||
            item.lastName.toLowerCase().includes(this.searchText.toLowerCase())
        })


      console.log(this.searchHints)
    }
    else {
      this.isShowSearchHint = false
    }
  }


  goToProfile(id) {
    this.router.navigate(['profile', id]);
  }

  goToEditInfo() {
    this.router.navigate(['/editInfo'])
  }

  goToHomePage() {
    this.router.navigate(['/home'])
  }

  logout() {
    this.utilService.deleteUserInLocalStorage('user')
    this.router.navigate(['/login'])
  }

}
