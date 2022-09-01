import { IPerfomanceIndicatorData, IUser } from "../../interfaces/interfaces";
import userPhoto from "../../img/user.jpg"

export const initialUser: IUser = {
    surname: "Тестов",
    name: "Демо",
    patronymic: "Мокович",
    login: "TestovDM",
    email: "TestovDM@demoneftegaz.ru",
    photo: `url(${userPhoto})`
}

export const initialPerfomanceIndicator: IPerfomanceIndicatorData = {
    days: ['2022-08-01','2022-08-02','2022-08-03','2022-08-04','2022-08-05','2022-08-06','2022-08-07'], 
    dng1: [200321, 198702, 187454, 199200, 188974, 202354, 200647], 
    dng2: [204321, 174702, 189454, 206200, 188974, 174354, 181647], 
    dng3: [188321, 206702, 202454, 170200, 181974, 174354, 200647],     
    dng4: [112321, 122702, 116454, 107200, 110974, 121354, 122647],
}