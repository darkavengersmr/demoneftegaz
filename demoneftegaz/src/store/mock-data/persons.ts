import { IPerson } from "../../interfaces/interfaces";
import TestovDM from "../../img/TestovDM.jpg"
import TipovaYaS from "../../img/TipovaYaS.jpg"
import DemovTP from "../../img/DemovTP.jpg"
import SaitovaVP from "../../img/SaitovaVP.jpg"
import PrimerovMD from "../../img/PrimerovMD.jpg"
import MokovAT from "../../img/MokovAT.jpg"
import PortalovaIS from "../../img/PortalovaIS.jpg"
import NodovDA from "../../img/NodovDA.jpg"
import DokerovIP from "../../img/DokerovIP.jpg"
import BashinAL from "../../img/BashinAL.jpg"
import MongovaDB from "../../img/MongovaDB.jpg"
import PostgresovSB from "../../img/PostgresovSB.jpg"

export const initialPersons: IPerson[] = [
    {
        id: 0,
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
    },
    {
        id: 1,
        surname: "Типова",
        name: "Ява",
        patronymic: "Скриптовна",
        login: "TipovaYaS",
        email: "TipovaYaS@demoneftegaz.ru",
        photo: `url(${TipovaYaS})`,
        jobTitle: "Инженер-программист",
        departament: "Отдел информационых технологий",
        phoneNumber: "(62)16-32, +79032164080",
        role: 'user'
    },
    {
        id: 2,
        surname: "Демов",
        name: "Семён",
        patronymic: "Примерович",
        login: "DemovTP",
        email: "DemovTP@demoneftegaz.ru",
        photo: `url(${DemovTP})`,
        jobTitle: "Ведущий специалист",
        departament: "Транспортный отдел",
        phoneNumber: "(62)08-07, +79064160802",
        role: 'user'
    },
    {
        id: 3,
        surname: "Сайтова",
        name: "Вероника",
        patronymic: "Порталовна",
        login: "SaitovaVP",
        email: "SaitovaVP@demoneftegaz.ru",
        photo: `url(${SaitovaVP})`,
        jobTitle: "Специалист",
        departament: "Отдел информационного обеспечения",
        phoneNumber: "(62)98-01, +79016001640",
        role: 'user'
    },
    {
        id: 4,
        surname: "Примеров",
        name: "Иван",
        patronymic: "Демович",
        login: "PrimerovMD",
        email: "PrimerovMD@demoneftegaz.ru",
        photo: `url(${PrimerovMD})`,
        jobTitle: "Главный специалист",
        departament: "Отдел добычи нефти и газа",
        phoneNumber: "(62)12-46, +79032080200",
        role: 'user'
    },
    {
        id: 5,
        surname: "Моков",
        name: "Александр",
        patronymic: "Тестович",
        login: "MokovAT",
        email: "MokovAT@demoneftegaz.ru",
        photo: `url(${MokovAT})`,
        jobTitle: "Главный специалист",
        departament: "Отдел добычи нефти и газа",
        phoneNumber: "(62)12-46, +79032080200",
        role: 'user'
    },
    {
        id: 6,
        surname: "Порталова",
        name: "Ирина",
        patronymic: "Сайтовна",
        login: "PortalovaIS",
        email: "PortalovaIS@demoneftegaz.ru",
        photo: `url(${PortalovaIS})`,
        jobTitle: "Начальник отдела",
        departament: "Отдел документооборота",
        phoneNumber: "(62)01-36, +79096020016",
        role: 'user'
    },
    {
        id: 7,
        surname: "Нодов",
        name: "Денис",
        patronymic: "Админович",
        login: "NodovDA",
        email: "NodovDA@demoneftegaz.ru",
        photo: `url(${NodovDA})`,
        jobTitle: "Старший специалист",
        departament: "Отдел аналитики",
        phoneNumber: "(62)78-43, +79008020064",
        role: 'user'
    },
    {
        id: 8,
        surname: "Докеров",
        name: "Игорь",
        patronymic: "Питонович",
        login: "DokerovIP",
        email: "DokerovIP@demoneftegaz.ru",
        photo: `url(${DokerovIP})`,
        jobTitle: "Заместитель начальника отдела",
        departament: "Отдел аналитики",
        phoneNumber: "(62)78-42, +79032020062",
        role: 'user'
    },
    {
        id: 9,
        surname: "Башин",
        name: "Алексей",
        patronymic: "Линуксович",
        login: "BashinAL",
        email: "BashinAL@demoneftegaz.ru",
        photo: `url(${BashinAL})`,
        jobTitle: "Начальник сектора",
        departament: "Сектор АХО",
        phoneNumber: "(62)48-32, +79036023247",
        role: 'user'
    },
    {
        id: 10,
        surname: "Монгова",
        name: "Дарья",
        patronymic: "Базовна",
        login: "MongovaDB",
        email: "MongovaDB@demoneftegaz.ru",
        photo: `url(${MongovaDB})`,
        jobTitle: "Специалист",
        departament: "Сектор АХО",
        phoneNumber: "(62)48-33, +79036023248",
        role: 'user'
    },
    {
        id: 11,
        surname: "Постгресов",
        name: "Семен",
        patronymic: "Базович",
        login: "PostgresovSB",
        email: "PostgresovSB@demoneftegaz.ru",
        photo: `url(${PostgresovSB})`,
        jobTitle: "Инженер 2 категории",
        departament: "Сектор бизнес-планирования",
        phoneNumber: "(62)33-31, +79044085248",
        role: 'user'
    },
]