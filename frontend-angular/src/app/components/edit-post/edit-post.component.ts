import { Component, OnInit } from '@angular/core';
import { IPost, Post } from '../../models/post.model';
import { UtilService } from '../../services/util.service';
import { PostService } from '../../services/post.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public userModel: any
  public postModel: IPost
  constructor(
    private utilService: UtilService,
    private postService: PostService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
    this.postModel = this.utilService.getPostFromLocalStorage()
  }

  editPost() {
    this.postService.updatePost(this.postModel).subscribe(
      response => {

      }
    )
    this.matDialog.closeAll()
  }
}
