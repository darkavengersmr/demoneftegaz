import { makeAutoObservable } from "mobx"
import { IFileStorage } from "../interfaces/interfaces"
import { initialFileStorage } from "./mock-data/file-storage"

class FileStorage {
    private data: IFileStorage[] = initialFileStorage

    constructor() {
        makeAutoObservable(this)
    }

    getLibrary(library: string) {        
        return this.data.filter(doc => doc.library === library)        
    }

    add(file: IFileStorage) {
        this.data.push(file)
    }

    remove(id: string) {
        this.data = this.data.filter(doc => doc.id !== id)
    }

}

export default new FileStorage()