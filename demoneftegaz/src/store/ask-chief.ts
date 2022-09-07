import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { IAskChief, INewAskChiefRequest } from "../interfaces/interfaces"
import { initialAskChief } from "./mock-data/ask-chief"

class AskChiefRequest {
    data: IAskChief[] = initialAskChief

    constructor() {
        makeAutoObservable(this)
    }
    
    getAll() {
        return this.data
    }

    getByOwnerId(id: number) {
        return this.data.filter((item) => item.owner === id)
    }

    askChiefRequest(request: INewAskChiefRequest) {
        this.data.push({
                id: this.data.length,    
                title: request.title,
                question: request.question,
                question_category: request.question_category,
                answer: "",
                create_date: dateNow(0),
                create_time: timeNow(),        
                owner: request.owner,
                status: "На рассмотрении"
          })
    }
}

export default new AskChiefRequest()