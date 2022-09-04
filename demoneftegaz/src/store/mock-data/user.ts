import { IUser } from "../../interfaces/interfaces";
import TestovDM from "../../img/TestovDM.jpg"

export const initialUser: IUser = {
    id: 0,
    tabnumber: "1608743",
    surname: "Тестов",
    name: "Андрей",
    patronymic: "Мокович",
    login: "TestovAM",
    email: "TestovAM@demoneftegaz.ru",
    photo: `url(${TestovDM})`,
    jobTitle: "Разработчик",
    departament: "Отдел по разработке портальных решений",
    phoneNumber: "+79064163208",
    role: ['admin'],
    PKZI_name: "DNG_P-TestovAM",
    PKZI_date: "2023-07-11",
    adress: "г.Демо, Продуктовый проспект, 40",
    description: "6 этаж, к.632",
    map: "",
    official: ""
}
