import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { INewWorkPermitRequest, IWorkPermit } from "../interfaces/interfaces"
import { initialWorkPermit } from "./mock-data/work-permit"

class WorkPermitRequest {
    data: IWorkPermit[] = initialWorkPermit

    constructor() {
        makeAutoObservable(this)
    }
    
    getByJournal(journal: string) {
        return this.data.filter((item) => item.journal === journal)
    }

    getByOwnerId(id: number) {
        return this.data.filter((item) => item.person_issued === id)
    }

    getNotCompletedById(id: number) {
        return this.data.filter((item) => item.status === "Выдан" && item.person_issued === id 
        )
    }

    workPermitRequest(request: INewWorkPermitRequest): string {
        let num = ""
        
        switch(request.journal) {
            case "Журнал регистрации нарядов-допусков на проведение газоопасных работ":
                num = "ЖГ"
              break;
            case "Журнал регистрации нарядов-допусков на проведение огневых работ":
                num = "ЖО"
              break;
            case "Журнал регистрации нарядов-допусков на проведение работ на высоте":
                num = "ЖВ"
              break;  
            case "Журнал регистрации нарядов-допусков на проведение работ повышенной опасности":
                num = "ЖП"
              break;  
            default:
          }
     
        let d = new Date(new Date().setDate(new Date().getDate())),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        
        num += [day, month, year, d.getHours(), d.getMinutes()].join('');
    
        this.data.push({
            id: this.data.length,
            journal: request.journal,
            number: num,
            create_date: dateNow(0),
            create_time: timeNow(),
            process_departament: request.process_departament,
            person_issued: request.person_issued,
            person_received: request.person_received,
            workplace: request.workplace,
            work_nature: request.work_nature,
            status: "Выдан",
            complete_date: "",
            complete_time: ""       
        })
        
        return num;
    }

    workPermitReceive(id: number, status: string) {
        this.data.map((item) => item.id === id ? item.status = status : null)
    }
}

export default new WorkPermitRequest()