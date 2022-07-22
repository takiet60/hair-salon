import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import { IChat, Chat } from '../../models/chat.model';

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

  public guessUserInfo = []
  public message: string = ''
  private userChatModel: IChat = new Chat(0, 0, 0, '', '')
  private guessChatModel: IChat
  public messages: any

  constructor(
    private router: Router,
    private utilService: UtilService,
    private userService: UserService,
    private chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this.userModel = this.utilService.getUserFromLocalStorage()
    this.getAllUsers()
    setInterval(() => {
      this.getMessages()
    }, 1000)
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

  sendMessage(id) {
    event.preventDefault()
    this.userChatModel.userId = this.userModel.id
    this.userChatModel.guessId = id
    this.userChatModel.message = this.message
    this.userChatModel.time = this.utilService.getMinute()

    this.chatService.addMessage(this.userChatModel).subscribe(
      response => {
        console.log(response)
        this.message = ''
        this.getMessages()
      }
    )
  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      response => {
        this.users = response
        this.guessUserInfo = [
          this.users[1].id,
          this.users[1].firstName + ' ' + this.users[1].lastName,
          this.users[1].imgUrl
        ]
        this.getMessages()
      }
    )
  }
  getMessages() {
    this.chatService.getMessages(this.userModel.id, this.guessUserInfo[0]).subscribe(
      response => {
        this.messages = response
        const chatMessages = document.querySelector('.chat-messages')
        chatMessages.innerHTML = ''
        for (let mess of this.messages) {
          const chat = document.createElement('div')
          if (mess.userId === this.userModel.id) {
            chat.classList.add('chat-message-right', 'pb-4')
            chat.style.display = 'flex'
            chat.style.flexShrink = '0'
            chat.style.marginLeft = 'auto'
            chat.style.flexDirection = 'row-reverse'
            chat.innerHTML = `
                          <div>
                              <img src=${this.userModel.imgUrl} class="rounded-circle mr-1" alt="Chris Wood"
                                  width="40" height="40">
                              <div class="text-muted small text-nowrap mt-2">${mess.time}</div>
                          </div>
                          <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                              <div class="font-weight-bold mb-1">You</div>
                              ${mess.message}
                          </div>
          `
          } else {
            chat.classList.add('chat-message-left', 'pb-4')
            chat.style.marginRight = 'auto'
            chat.style.display = 'flex'
            chat.innerHTML = `
                         <div>
                            <img src="${this.guessUserInfo[2]}"
                                class="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40">
                            <div class="text-muted small text-nowrap mt-2">${mess.time}</div>
                        </div>
                        <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                            <div class="font-weight-bold mb-1">${this.guessUserInfo[1]}</div>
                           ${mess.message}
                        </div>
          `
          }
          chatMessages.append(chat)
        }
        console.log(this.messages)
      }
    )
  }

  getGuessUserInfo(id: any, username: string, imgUrl: string) {
    this.guessUserInfo = [id, username, imgUrl]
    console.log(this.guessUserInfo)
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
