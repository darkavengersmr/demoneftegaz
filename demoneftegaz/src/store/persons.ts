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

    getByFilter(filter: string) {
        if (filter === "") return this.data
        return this.data.filter((person) => person.surname.indexOf(filter)+1 ||
                                            person.name.indexOf(filter)+1 ||
                                            person.patronymic.indexOf(filter)+1 ||
                                            person.email.indexOf(filter)+1 ||
                                            person.phoneNumber.indexOf(filter)+1 ||
                                            person.departament.indexOf(filter)+1 
        )
    }
}

export default new Person()