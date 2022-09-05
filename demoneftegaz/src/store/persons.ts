import { makeAutoObservable } from "mobx"
import { IPerson } from "../interfaces/interfaces"
import { initialPersons } from "./mock-data/persons"

class Person {
    private data: IPerson[] = initialPersons

    constructor() {
        makeAutoObservable(this)
    }
    
    getAll() {
        return this.data
    }

    getById(id: number): IPerson | undefined{        
        return this.data.find((person) => person.id === id)        
    }

    getByTabnumber(tabnumber: string): IPerson | undefined{        
        return this.data.find((person) => person.tabnumber === tabnumber)        
    }

    getPersonsByFilter(filter: string): IPerson[] {
        if (filter === "") return this.data.filter((person) => person.official === "")
        return this.data.filter((person) => person.surname.indexOf(filter)+1 ||
                                            person.name.indexOf(filter)+1 ||
                                            person.patronymic.indexOf(filter)+1 ||
                                            person.email.indexOf(filter)+1 ||
                                            person.phoneNumber.indexOf(filter)+1 ||
                                            person.departament.indexOf(filter)+1
        ).filter((person) => person.official === "")
    }

    getOfficialEmailsByFilter(filter: string): IPerson[] {
        if (filter === "") return this.data.filter((person) => person.official !== "")
        return this.data.filter((person) => person.surname.indexOf(filter)+1 ||
                                            person.name.indexOf(filter)+1 ||
                                            person.patronymic.indexOf(filter)+1 ||
                                            person.email.indexOf(filter)+1 ||
                                            person.phoneNumber.indexOf(filter)+1 ||
                                            person.departament.indexOf(filter)+1
        ).filter((person) => person.official !== "")
    }
}

export default new Person()