import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost, Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/post'
  constructor(
    private httpClient: HttpClient
  ) { }

  public addPost(post: IPost): Observable<Post> {
    return this.httpClient.post<Post>(`${this.apiUrl}/add`, post)
  }

  public getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.apiUrl}/all`)
  }

  public updateLikes(likes: number, id: number, post: IPost): Observable<IPost> {
    return this.httpClient.patch<IPost>(`${this.apiUrl}/updateLikes?likes=${likes}&id=${id}`, post);
  }

  public getPostsByUserId(userId): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.apiUrl}/getByUserId?userId=${userId}`)
  }

  public getPostById(id): Observable<IPost> {
    return this.httpClient.get<Post>(`${this.apiUrl}/getById?id=${id}`)
  }

  public updatePost(post: IPost): Observable<IPost> {
    return this.httpClient.post<Post>(`${this.apiUrl}/updatePost`, post)
  }
}
