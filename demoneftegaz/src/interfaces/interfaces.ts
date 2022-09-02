export interface IUser {    
    surname: string
    name: string
    patronymic: string
    login: string
    email: string
    photo: string
}

export interface IPerfomanceIndicatorData {    
    days: string[]
    data: {
        title: string,
        color: string,
        params: number[]
    }[]   
}