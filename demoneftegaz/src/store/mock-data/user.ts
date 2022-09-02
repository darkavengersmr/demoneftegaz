import { IUser } from "../../interfaces/interfaces";
import TestovDM from "../../img/TestovDM.jpg"

export const initialUser: IUser = {
    surname: "Тестов",
    name: "Андрей",
    patronymic: "Мокович",
    login: "TestovAM",
    email: "TestovAM@demoneftegaz.ru",
    photo: `url(${TestovDM})`,
    jobTitle: "Разработчик",
    departament: "Отдел по разработке портальных решений",
    phoneNumber: "+79064163208",
    role: 'admin'
}

