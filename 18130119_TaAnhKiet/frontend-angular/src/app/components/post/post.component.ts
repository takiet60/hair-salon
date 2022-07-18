import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { IUser } from '../../models/user';
import { IPost, Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public userModel: any
  public postModel: IPost = new Post(0, 0, '', '', '', '', '', 0)

  constructor(
    private utilService: UtilService,
    private postService: PostService,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
  }


  createPost() {
    this.postModel.time = this.getTimeNow()
    this.postModel.userId = this.userModel.id
    this.postModel.userName = this.userModel.firstName + ' ' + this.userModel.lastName
    this.postModel.userImgUrl = this.userModel.imgUrl
    this.postService.addPost(this.postModel).subscribe(
      response => {
        this.matDialog.closeAll()
        window.location.reload()
      }
    )
  }


  getTimeNow() {
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
