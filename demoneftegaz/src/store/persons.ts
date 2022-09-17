import { makeAutoObservable } from "mobx";
import { IPerson, IPersonClass } from "../interfaces/interfaces";
import { initialPersons } from "./mock-data/persons";

class Person implements IPersonClass {
  private data: IPerson[] = initialPersons;

  constructor() {
    makeAutoObservable(this);
  }

  getAll() {
    return this.data;
  }

  getById(id: number): IPerson | undefined {
    return this.data.find((person) => person.id === id);
  }

  getByTabnumber(tabnumber: string): IPerson | undefined {
    return this.data.find((person) => person.tabnumber === tabnumber);
  }

  getByDepartament(departament: string): IPerson[] {
    return this.data.filter((person) => person.departament === departament);
  }

  getPersonsByFilter(filter: string): IPerson[] {
    if (filter === "")
      return this.data.filter((person) => person.official === "");
    return this.data
      .filter(
        (person) =>
          person.surname.indexOf(filter) + 1 ||
          person.name.indexOf(filter) + 1 ||
          person.patronymic.indexOf(filter) + 1 ||
          person.email.indexOf(filter) + 1 ||
          person.phoneNumber.indexOf(filter) + 1 ||
          person.departament.indexOf(filter) + 1
      )
      .filter((person) => person.official === "");
  }

  likeToPerson(id: number) {
    this.data = this.data.map((person) => {
      if (person.id === id) {
        const rating = person.rating ? person.rating + 1 : 1;
        return { ...person, rating };
      } else return person;
    });
  }

  getOfficialEmailsByFilter(filter: string): IPerson[] {
    if (filter === "")
      return this.data.filter((person) => person.official !== "");
    return this.data
      .filter(
        (person) =>
          person.surname.indexOf(filter) + 1 ||
          person.name.indexOf(filter) + 1 ||
          person.patronymic.indexOf(filter) + 1 ||
          person.email.indexOf(filter) + 1 ||
          person.phoneNumber.indexOf(filter) + 1 ||
          person.departament.indexOf(filter) + 1
      )
      .filter((person) => person.official !== "");
  }

  setPersonLocation(personId: number, location: { x: number; y: number }) {
    this.data.forEach((person) => {
      if (person.id === personId) {
        person.location = location;
      }
    });
  }
}

export default new Person();
