export interface IComment {
    id: number
    postId: number
    userId: number
    userImgUrl: string
    content: string
    time: string
}

export class Comment implements IComment {
    id: number
    postId: number
    userId: number
    userImgUrl: string
    content: string
    time: string
    constructor(id: number, postId: number, userId: number, userImgUrl, content: string, time: string) {
        this.id = id
        this.postId = postId
        this.userId = userId
        this.userImgUrl = userImgUrl
        this.content = content
        this.time = time
    }

}
