import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { INewTransportRequest, ITransport } from "../interfaces/interfaces"
import { initialTransport } from "./mock-data/transport-request"

class TransportRequest {
    data: ITransport[] = initialTransport

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

    transportRequest(request: INewTransportRequest) {     
        this.data.push({  
            id: this.data.length,
            number: `ДНГ/О/${this.data.length + 1}`,
            create_date: dateNow(0),
            create_time: timeNow(),
            person: request.person,
            personsCount: request.personsCount,
            owner: request.owner,
            from: request.from,
            destination: request.destination,
            date: request.date,
            time_in: request.time_in,
            time_out: request.time_out,
            justification: request.justification,  
            need_agreement_chief: request.need_agreement_chief,
            agreement_person: request.agreement_person,
            agreement_date: "",
            agreement_time: "",
            status: "На согласовании",
            car: "",
            driver: "",
            description: ""
        })     
    }
}

export default new TransportRequest()