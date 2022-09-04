export type IRoles = 'admin' | 'user' | 'guest'

export interface IUser {
    id: number
    tabnumber: string    
    surname: string
    name: string
    patronymic: string
    login: string
    email: string
    photo: string
    jobTitle: string
    departament: string
    phoneNumber: string
    role: IRoles[]
    PKZI_name: string
    PKZI_date: string
    adress: string
    description: string
    map: string
    official: string
}

export interface IPerfomanceIndicatorData {    
    days: string[]
    data: {
        title: string,
        color: string,
        params: number[]
    }[]   
}

export interface IProductionData {    
    title: string
    monthFact: number
    monthFactProc: number
    yearFact: number
    yearFactProc: number
}

export interface IPerson {
    id: number
    tabnumber: string
    surname: string
    name: string
    patronymic: string
    login: string
    email: string
    photo: string
    jobTitle: string
    departament: string
    phoneNumber: string
    role: IRoles[]
    PKZI_name: string
    PKZI_date: string
    adress: string
    description: string
    map: string
    official: string   
} 

export interface IVisitorRequest {
    id: number
    number: string
    visitorType: string
    visitorList: string
    justification: string
    date: string
    time_in: string
    time_out: string
    owner: number
    apply: boolean    
}

export interface INewVisitorRequest {
    visitorType: string
    visitorList: string
    justification: string
    date: string
    time_in: string
    time_out: string
    owner: number    
}