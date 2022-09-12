import { makeAutoObservable } from "mobx"
import { dateNow, timeNow } from "../helpers/helpers"
import { IHallOfFame, IHallOfFameClass } from "../interfaces/interfaces"
import { initialHallOfFame } from "./mock-data/hall-of-fame"

class HallOfFame implements IHallOfFameClass {
    private data: IHallOfFame[] = initialHallOfFame

    constructor() {
        makeAutoObservable(this)
    }
    
    getOfficial(): IHallOfFame[] {        
        return this.data.filter((awardItem) => awardItem.official)            
    }
    getUnofficial(): IHallOfFame[] {        
        return this.data.filter((awardItem) => !awardItem.official)            
    }
    addAward(award: IHallOfFame) {
        this.data.push({
            ...award,
            id: this.data.length,
            create_date: dateNow(0),
            create_time: timeNow(),
        })
    }

}

export default new HallOfFame()