import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IChat } from '../models/chat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private apiUrl = "http://localhost:8080/chat"

  addMessage(chat: IChat): Observable<IChat> {
    return this.httpClient.post<IChat>(`${this.apiUrl}/add`, chat)
  }

  getMessages(userId: number, guessId: number): Observable<IChat> {
    return this.httpClient.get<IChat>(`${this.apiUrl}/getChats?userId=${userId}&guessId=${guessId}`)
  }

}
