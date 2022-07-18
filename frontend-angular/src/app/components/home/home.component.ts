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
import { UserService } from '../../services/user.service';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userModel: any
  public users: any

  public posts: any
  private editPost: any

  public allPosts: any

  public temp: any
  public isActive: boolean = false
  public isCommentActive: boolean = false
  public commentModel: IComment = new Comment(0, 0, 0, '', '', '')
  public comments: IComment[]

  public searchText: ''
  public isShowSearchHint = false
  public searchHints: IUser[]

  public isShowEditbox: Boolean = false


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
    private commentService: CommentService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
    this.showTopics()
    this.getAllUsers()
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

  openEditPost(id: any) {
    const dialogRef: MatDialogRef<EditPostComponent, any> = this.matDialog.open(
      EditPostComponent,
      {
        role: 'dialog',
        height: '580px',
        width: '480px',
      })

    this.postService.getPostById(id).subscribe(
      response => {
        this.editPost = response
        this.utilService.savePostToLocalStorage(this.editPost)
      }
    )

  }

  showTopics() {
    this.postService.getAllPosts().subscribe(
      (response: any) => {
        this.temp = response
        this.allPosts = this.temp.reverse()
        this.posts = this.allPosts.splice(0, 5)
      }
    )
  }

  showComments() {
    this.isCommentActive = !this.isCommentActive
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

  showEditBox() {
    this.isShowEditbox = true
  }

  hideEditBox() {
    this.isShowEditbox = false
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

  goToProfile(id) {
    this.router.navigate(['profile', id]);
  }

  goToChatRoom() {
    this.router.navigate(['chat'])
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response
      }
    )
  }

  loadMore() {
    this.posts = [...this.posts, this.allPosts.splice(0, 5)].reduce(
      (acc, val) => acc.concat(val), []
    )
    console.log(this.posts)
  }

  goToEditInfo() {
    this.router.navigate(['/editInfo'])
  }

  logout() {
    this.utilService.deleteUserInLocalStorage('user')
    this.router.navigate(['/login'])
  }
}
