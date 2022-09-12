import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { INewWorkAbsenseWeekendRequest, IWorkAbsenseWeekend } from "../interfaces/interfaces"
import { initialWorkWeekend } from "./mock-data/work-weekend"

class WorkWeekendRequest {
    data: IWorkAbsenseWeekend[] = initialWorkWeekend

    constructor() {
        makeAutoObservable(this)
    }
    
    getAll() {
        return this.data
    }

    getByOwnerId(id: number) {
        return this.data.filter((item) => item.owner === id)
    }

    getAgreementedFromMeByOwnerId(id: number) {
        return this.data.filter((item) => item.status === "На согласовании" && item.owner === id 
        )
    }

    getAgreementedToMeByOwnerId(id: number) {
        return this.data.filter((item) => item.status === "На согласовании" && item.agreement_person === id
        )
    }

    agreeRequest(id: number, status: string) {
        this.data.map((item) => item.id === id ? item.status = status : null)    
    }

    workWeekendRequest(request: INewWorkAbsenseWeekendRequest) {        
        this.data.push({
            id: this.data.length,
            number: `ДНГ/В/${this.data.length + 1}`,
            create_date: dateNow(0),
            create_time: timeNow(),
            person: request.person,
            justification: request.justification,
            absense_date_in: request.absense_date_in,
            absense_date_out: request.absense_date_out,
            absense_time_in: request.absense_time_in,
            absense_time_out: request.absense_time_out,
            owner: request.owner,                
            status: "На согласовании",                
            agreement_person: request.agreement_person,
            agreement_date: "",
            agreement_time: ""
        })     
    }
}

export default new WorkWeekendRequest()