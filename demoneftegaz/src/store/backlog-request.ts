import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { IBacklogRequest, IBacklogRequestClass } from "../interfaces/interfaces"
import { initialBacklogRequest } from "./mock-data/backlog-request"

class BacklogRequest implements IBacklogRequestClass {
    private data: IBacklogRequest[] = initialBacklogRequest

    constructor() {
        makeAutoObservable(this)
    }
    
    getAll() {
        return this.data
    }

    addBacklogRequest(request: IBacklogRequest) {
        this.data.push({
                ...request,
                id: this.data.length,        
                create_date: dateNow(0),
                create_time: timeNow(),
                status: "Новое требование",
          })
    }
}

export default new BacklogRequest()