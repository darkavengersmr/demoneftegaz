import { makeAutoObservable } from "mobx"
import { IUser, IUserClass } from "../interfaces/interfaces"
import { initialUser } from "./mock-data/user"

class User implements IUserClass {
    data: IUser = initialUser

    constructor() {
        makeAutoObservable(this)
    }
    
    getSurnameNP() {
        return `${this.data.surname} ${this.data.name[0].toUpperCase()}.${this.data.patronymic[0].toUpperCase()}.`
    }

    setDescription(description: string) {
        this.data.description = description
    }

    getPhotoUrl() {
        return this.data.photo.slice(4, -1)
    }

    setTheme(theme: 'dark' | 'light') {        
        this.data.settings = {...this.data.settings, theme}        
    }
}

export default new User()