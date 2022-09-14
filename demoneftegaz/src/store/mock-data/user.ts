import { IUser } from "../../interfaces/interfaces";
import TestovDM from "../../img/TestovDM.jpg"

export const initialUser: IUser = {
    id: 0,
    tabnumber: "1608743",
    surname: "Тестов",
    name: "Андрей",
    patronymic: "Васильевич",
    login: "TestovAM",
    email: "TestovAM@demoneftegaz.ru",
    photo: `url(${TestovDM})`,
    jobTitle: "Разработчик",
    departament: "Отдел по разработке портальных решений",
    departament_chief: 16,
    phoneNumber: "+79064163208",
    role: ['admin'],
    PKZI_name: "DNG_P-TestovAM",
    PKZI_date: "2023-07-11",
    adress: "г.Демо, Продуктовый проспект, 40",
    description: "6 этаж, к.632",
    map: "",
    official: "",
    absense: "",
    absense_date_in: "",
    absense_date_out: "",
    settings: {
        theme: 'light'
    }
}

