import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { IUser } from '../../models/user';
import { PostService } from '../../services/post.service';
import { Comment, IComment } from '../../models/comment.model';
import { createHostListener } from '@angular/compiler/src/core';
import { CommentService } from '../../services/comment.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userModel: any

  public posts: any
  public temp: any
  public isActive: boolean = false
  public isCommentActive: boolean = false
  public commentModel: IComment = new Comment(0, 0, 0, '', '', '')
  public comments: IComment[]


  images: any[] = [
    'https://images-na.ssl-images-amazon.com/images/I/51DR2KzeGBL._AC_.jpg',
    'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg',
    'https://torange.biz/photofx/93/8/light-vivid-colors-fragment-love-background-rain-fall-cover-93412.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_960_720.jpg',
    'https://c0.wallpaperflare.com/preview/956/761/225/5be97da101a3f.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Swepac_FB_465%2C_RV70%2C_with_passing_lorry.jpg'
  ];

  constructor(private matDialog: MatDialog,
    private router: Router,
    private utilService: UtilService,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
    this.showTopics()
  }

  openPost() {
    const dialogRef: MatDialogRef<PostComponent, any> = this.matDialog.open(
      PostComponent,
      {
        role: 'dialog',
        height: '580px',
        width: '480px',
      })
  }

  showTopics() {
    this.posts = this.postService.getAllPosts().subscribe(
      (response: any) => {
        this.temp = response
        this.posts = this.temp.reverse()
      }
    )
  }

  showComments() {
    this.isCommentActive = !this.isCommentActive
  }

  updateLikes(likes: number, id: any, p: any) {

    this.postService.updateLikes(++likes, id, p).subscribe(
      (response) => {
      }
    )
    this.isActive = true
  }


  addComment(postId) {
    console.log(postId)
    this.commentModel.postId = postId
    this.commentModel.userId = this.userModel.id
    this.commentModel.userImgUrl = this.userModel.imgUrl
    this.commentModel.time = this.utilService.getTimeNow()
    this.commentService.addComment(this.commentModel).subscribe(
      (response) => {
        this.commentModel.content = ''
        this.getCommentsByPostId(postId)
      }
    )
  }

  getCommentsByPostId(postId: number) {
    this.commentService.getCommentsByPostId(postId).subscribe(
      (response: any) => {
        this.comments = response
        console.log(this.comments)
      }
    )
  }

  logout() {
    this.utilService.deleteUserInLocalStorage('user')
    this.router.navigate(['/login'])
  }

}
