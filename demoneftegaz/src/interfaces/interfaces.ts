
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
    absense: string
    absense_date_in: string   
    absense_date_out: string
    substitute?: number
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
    rating?: number
    absense: string
    absense_date_in: string   
    absense_date_out: string
    substitute?: number
} 

export interface INews {
  id: number;
  coverImageUrl: string;
  title: string;
  date: string;
  description: string;
  content: string;
  typeOfNews: "news" | "main" | "hidden";
}

export interface INewsClass {
    news: INews[]    
    getNews: () => INews[]
    hasMainNews: () => boolean
    getMainNews: () => INews[]
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

export interface IWorkPermit {
    id: number
    journal: string
    number: string
    create_date: string
    create_time: string
    process_departament: string
    person_issued: number
    person_received: number
    workplace: string
    work_nature: string
    status: string
    complete_date: string
    complete_time: string
}

export interface INewWorkPermitRequest {    
    journal: string        
    process_departament: string
    person_issued: number
    person_received: number
    workplace: string
    work_nature: string    
}

export interface IFileStorage {
    id: string,
    filename: string,    
    title: string,
    create_date_time: string,
    modify_date_time: string,
    library: string,
    owner: number,
    meta: {
        [key: string]: string | number | boolean
    }
}

export interface INewFileStorage {    
    filename: string,    
    title: string,    
    library: string,
    owner: number,
    meta: {
        [key: string]: string | number | boolean
    }
}

export interface IFileStorageClass {
    data: IFileStorage[]
    getLibrary: (library: string) => IFileStorage[]
    add: (file: INewFileStorage) => void
    remove: (id: string) => void
}

export interface IResourceList {
    img: string
    title: string
    author: string
    rows?: number
    cols?: number
    featured?: boolean
    owner?: string

}

export interface IDepartament {
    id: number
    org_index: string
    title: string
    departament_chief: number
    offficial_email: number
}

export interface IPersonClass {
    getAll: () => void
    getById: (id: number) => IPerson | undefined
    getByTabnumber: (tabnumber: string) => IPerson | undefined    
    getPersonsByFilter: (filter: string) => IPerson[]
    likeToPerson: (id: number) => void
    getOfficialEmailsByFilter: (filter: string) => IPerson[] 
    getByDepartament: (departament: string) => IPerson[]
}

export interface IHallOfFame {
    id?: number
    awarder_id: number    
    rewarder_id: number
    award: string
    official: boolean
    create_date?: string
    create_time?: string
}

export interface IHallOfFameClass {
    getOfficial: () => IHallOfFame[]
    getUnofficial: () => IHallOfFame[]
    addAward: (award: IHallOfFame) => void
}