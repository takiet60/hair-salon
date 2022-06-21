import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = "http://localhost:8080/comment"

  constructor(
    private httpClient: HttpClient
  ) { }

  public addComment(comment: IComment): Observable<IComment> {
    return this.httpClient.post<IComment>(`${this.apiUrl}/add`, comment);
  }

  public getCommentsByPostId(postId: number): Observable<IComment> {
    return this.httpClient.get<IComment>(`${this.apiUrl}/all?postId=${postId}`)
  }
}
