export interface IPost {
    id: number
    userId: number
    userName: string
    userImgUrl: string
    content: string
    imgUrl: string
    time: string
}

export class Post implements IPost {
    id: number
    userId: number
    userName: string
    userImgUrl: string
    content: string
    imgUrl: string
    time: string
    likes: number

    constructor(id: number, userId: number, userName: string, userImgUrl: string,
        content: string, imgUrl: string, time: string, likes: number) {
        this.id = id
        this.userId = userId
        this.userName = userName
        this.userImgUrl = userImgUrl
        this.content = content
        this.imgUrl = imgUrl
        this.time = time
        this.likes = likes
    }
}