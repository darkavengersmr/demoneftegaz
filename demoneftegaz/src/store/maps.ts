import { makeAutoObservable } from "mobx";
import { IMap, IMapClass } from "../interfaces/interfaces";
import { initialMap } from "./mock-data/maps";

class Map implements IMapClass {
  private data: IMap[] = initialMap;

  constructor() {
    makeAutoObservable(this);
  }

  getAll() {
    return this.data;
  }

  getById(id: number): IMap | undefined {
    return this.data.find((person) => person.id === id);
  }

}

export default new Map();