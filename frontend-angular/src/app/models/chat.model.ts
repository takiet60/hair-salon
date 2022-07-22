export interface IChat {
    id: number
    userId: number
    guessId: number
    time: string
    message: string
}

export class Chat implements IChat {
    id: number
    userId: number
    guessId: number
    time: string
    message: string

    constructor(id: number, userId: number, guessId: number, time: string, message: string) {
        this.id = id
        this.guessId = guessId
        this.userId = userId
        this.time = time
        this.message = message
    }
}
