import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { IFileStorage, INewFileStorage, IFileStorageClass } from "../interfaces/interfaces"
import { initialFileStorage } from "./mock-data/file-storage"

class FileStorage implements IFileStorageClass {
    data: IFileStorage[] = initialFileStorage

    constructor() {
        makeAutoObservable(this)
    }

    getLibrary(library: string) {        
        return this.data.filter(doc => doc.library === library)        
    }

    add(file: INewFileStorage) {
        this.data.push({
            ...file,
            id: this.data.length.toString(),
            create_date_time: `${dateNow(0)} ${timeNow()}`,
            modify_date_time: `${dateNow(0)} ${timeNow()}`,            
        })
    }

    remove(id: string) {
        this.data = this.data.filter(doc => doc.id !== id)
    }

}

export default new FileStorage()