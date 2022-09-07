
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
    departament_chief: number
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
  days: string[];
  data: {
    title: string;
    color: string;
    params: number[];
  }[];
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
    departament_chief: number
    phoneNumber: string
    role: IRoles[]
    PKZI_name: string
    PKZI_date: string
    adress: string
    description: string
    map: string
    official: string   
} 

export interface INews {
  id: number;
  coverImageUrl: string;
  title: string;
  date: Date;
  description: string;
  content: string;
  typeOfNews: "news" | "main" | "hidden";
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

export interface IWorkAbsenseWeekend {
    id: number
    number: string
    create_date: string
    create_time: string
    person: number    
    justification: string
    absense_date_in: string
    absense_date_out: string
    absense_time_in: string
    absense_time_out: string
    status: string
    owner: number
    agreement_person: number
    agreement_date: string
    agreement_time: string
}

export interface INewWorkAbsenseWeekendRequest {
    person: number
    agreement_person: number
    justification: string
    absense_date_in: string
    absense_date_out: string
    absense_time_in: string
    absense_time_out: string    
    owner: number    
}

export interface ICdsRequest {
    fullname: string
    jobTitle: string
    email: string
    phoneNumber: string
    adress: string
    title: string
    description: string
    file: string
}

export interface ITransport {
    id: number
    number: string
    create_date: string
    create_time: string
    person: number
    personsCount: number
    owner: number
    from: string
    destination: string
    date: string
    time_in: string
    time_out: string
    justification: string    
    status: string
    need_agreement_chief: boolean
    agreement_person: number
    agreement_date: string
    agreement_time: string
    car: string
    driver: string
    description: string
}

export interface INewTransportRequest {    
    person: number
    personsCount: number
    owner: number
    from: string
    destination: string
    date: string
    time_in: string
    time_out: string
    justification: string        
    need_agreement_chief: boolean
    agreement_person: number
    agreement_date: string
    agreement_time: string    
}

export interface IAskChief {
    id: number    
    title: string
    question: string    
    question_category: string
    answer: string
    create_date: string
    create_time: string        
    owner: number
    status: string

}

export interface INewAskChiefRequest {   
    title: string  
    question: string    
    question_category: string
    owner: number    
}

