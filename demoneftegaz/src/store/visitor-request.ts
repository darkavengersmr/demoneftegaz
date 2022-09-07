import { makeAutoObservable } from "mobx"
import { INewVisitorRequest, IVisitorRequest } from "../interfaces/interfaces"
import { initialVisitorRequest } from "./mock-data/visitor-request"

class visitorRequest {
    data: IVisitorRequest[] = initialVisitorRequest

    constructor() {
        makeAutoObservable(this)
    }
    
    getAll() {
        return this.data
    }

    getByOwnerId(id: number) {
        return this.data.filter((item) => item.owner === id)
    }

    addVisitorRequest(request: INewVisitorRequest) {
        this.data.push({
                id: this.data.length,
                number: `ДНГ/П/${this.data.length + 1}`,
                visitorType: request.visitorType,
                visitorList: request.visitorList,
                justification: request.justification,
                date: request.date,
                time_in: request.time_in,
                time_out: request.time_out,
                owner: request.owner,
                apply: false
          })
    }
}

export default new visitorRequest()