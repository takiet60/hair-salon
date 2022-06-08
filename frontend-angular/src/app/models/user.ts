export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    imgUrl: string,
    userCode: string
}

export class User implements IUser {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    imgUrl: string
    userCode: string

    constructor(id: number, firstName: string, lastName: string, email: string, password: string,
        phone: string, imgUrl: string, userCode: string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phone = phone
        this.imgUrl = imgUrl
        this.userCode = userCode


    }

}