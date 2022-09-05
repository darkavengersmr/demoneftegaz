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
        tabnumber: "1608743",
        surname: "Тестов",
        name: "Андрей",
        patronymic: "Мокович",
        login: "TestovAM",
        email: "TestovAM@demoneftegaz.ru",
        photo: `url(${TestovDM})`,
        jobTitle: "Разработчик",
        departament: "Отдел по разработке портальных решений",
        departament_chief: 16,
        phoneNumber: "+79064163208",
        role: ['admin', 'user'],
        PKZI_name: "DNG_P-TestovAM",
        PKZI_date: "2023-07-11",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "6 этаж, к.632",
        map: "",
        official: ""
    },
    {
        id: 1,
        tabnumber: "1608344",
        surname: "Типова",
        name: "Ява",
        patronymic: "Скриптовна",
        login: "TipovaYaS",
        email: "TipovaYaS@demoneftegaz.ru",
        photo: `url(${TipovaYaS})`,
        jobTitle: "Инженер-программист",
        departament: "Отдел информационых технологий",
        departament_chief: 16,
        phoneNumber: "(62)16-32, +79032164080",
        role: ['user'],
        PKZI_name: "DNG_P-TipovaYaS",
        PKZI_date: "2023-04-12",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "2 этаж, к.23",
        map: "",
        official: ""
    },
    {
        id: 2,
        tabnumber: "1603432",
        surname: "Демов",
        name: "Семён",
        patronymic: "Примерович",
        login: "DemovTP",
        email: "DemovTP@demoneftegaz.ru",
        photo: `url(${DemovTP})`,
        jobTitle: "Ведущий специалист",
        departament: "Транспортный отдел",
        departament_chief: 16,
        phoneNumber: "(62)08-07, +79064160802",
        role: ['user'],
        PKZI_name: "DNG_P-DemovTP",
        PKZI_date: "2023-01-30",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "3 этаж, к.323",
        map: "",
        official: ""        
    },
    {
        id: 3,
        tabnumber: "1603465",
        surname: "Сайтова",
        name: "Вероника",
        patronymic: "Порталовна",
        login: "SaitovaVP",
        email: "SaitovaVP@demoneftegaz.ru",
        photo: `url(${SaitovaVP})`,
        jobTitle: "Специалист",
        departament: "Отдел информационного обеспечения",
        departament_chief: 16,
        phoneNumber: "(62)98-01, +79016001640",
        role: ['user'],
        PKZI_name: "DNG_P-SaitovaVP",
        PKZI_date: "2022-12-30",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "1 этаж, к.11",
        map: "",
        official: ""
    },
    {
        id: 4,
        tabnumber: "1602397",
        surname: "Примеров",
        name: "Иван",
        patronymic: "Демович",
        login: "PrimerovMD",
        email: "PrimerovMD@demoneftegaz.ru",
        photo: `url(${PrimerovMD})`,
        jobTitle: "Главный специалист",
        departament: "Отдел добычи нефти и газа",
        departament_chief: 16,
        phoneNumber: "(62)12-46, +79032080200",
        role: ['user'],
        PKZI_name: "DNG_P-PrimerovMD",
        PKZI_date: "2023-08-21",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "8 этаж, к.811",
        map: "",
        official: ""
    },
    {
        id: 5,
        tabnumber: "1603864",
        surname: "Моков",
        name: "Александр",
        patronymic: "Тестович",
        login: "MokovAT",
        email: "MokovAT@demoneftegaz.ru",
        photo: `url(${MokovAT})`,
        jobTitle: "Главный специалист",
        departament: "Отдел добычи нефти и газа",
        departament_chief: 16,
        phoneNumber: "(62)12-46, +79032080200",
        role: ['user'],
        PKZI_name: "DNG_P-MokovAT",
        PKZI_date: "2023-09-22",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "11 этаж, к.1112",
        map: "",
        official: ""
    },
    {
        id: 6,
        tabnumber: "1603864",
        surname: "Порталова",
        name: "Ирина",
        patronymic: "Сайтовна",
        login: "PortalovaIS",
        email: "PortalovaIS@demoneftegaz.ru",
        photo: `url(${PortalovaIS})`,
        jobTitle: "Начальник отдела",
        departament: "Отдел документооборота",
        departament_chief: 16,
        phoneNumber: "(62)01-36, +79096020016",
        role: ['user'],
        PKZI_name: "DNG_P-PortalovaIS",
        PKZI_date: "2023-02-20",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "12 этаж, к.1202",
        map: "",
        official: ""
    },
    {
        id: 7,
        tabnumber: "1603974",
        surname: "Нодов",
        name: "Денис",
        patronymic: "Админович",
        login: "NodovDA",
        email: "NodovDA@demoneftegaz.ru",
        photo: `url(${NodovDA})`,
        jobTitle: "Старший специалист",
        departament: "Отдел аналитики",
        departament_chief: 16,
        phoneNumber: "(62)78-43, +79008020064",
        role: ['user'],
        PKZI_name: "DNG_P-NodovDA",
        PKZI_date: "2023-03-03",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "7 этаж, к.706",
        map: "",
        official: ""
    },
    {
        id: 8,
        tabnumber: "1603974",
        surname: "Докеров",
        name: "Игорь",
        patronymic: "Питонович",
        login: "DokerovIP",
        email: "DokerovIP@demoneftegaz.ru",
        photo: `url(${DokerovIP})`,
        jobTitle: "Заместитель начальника отдела",
        departament: "Отдел аналитики",
        departament_chief: 16,
        phoneNumber: "(62)78-42, +79032020062",
        role: ['user'],
        PKZI_name: "DNG_P-DokerovIP",
        PKZI_date: "2023-03-08",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "7 этаж, к.708",
        map: "",
        official: ""
    },
    {
        id: 9,
        tabnumber: "1603974",
        surname: "Башин",
        name: "Алексей",
        patronymic: "Линуксович",
        login: "BashinAL",
        email: "BashinAL@demoneftegaz.ru",
        photo: `url(${BashinAL})`,
        jobTitle: "Начальник сектора",
        departament: "Сектор АХО",
        departament_chief: 16,
        phoneNumber: "(62)48-32, +79036023247",
        role: ['user'],
        PKZI_name: "DNG_P-BashinAL",
        PKZI_date: "2023-04-08",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "7 этаж, к.709",
        map: "",
        official: ""
    },
    {
        id: 10,
        tabnumber: "1602209",
        surname: "Монгова",
        name: "Дарья",
        patronymic: "Базовна",
        login: "MongovaDB",
        email: "MongovaDB@demoneftegaz.ru",
        photo: `url(${MongovaDB})`,
        jobTitle: "Специалист",
        departament: "Сектор АХО",
        departament_chief: 16,
        phoneNumber: "(62)48-33, +79036023248",
        role: ['user'],
        PKZI_name: "DNG_P-MongovaDB",
        PKZI_date: "2023-05-08",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "9 этаж, к.904",
        map: "",
        official: ""
    },
    {
        id: 11,
        tabnumber: "1603987",
        surname: "Постгресов",
        name: "Семен",
        patronymic: "Базович",
        login: "PostgresovSB",
        email: "PostgresovSB@demoneftegaz.ru",
        photo: `url(${PostgresovSB})`,
        jobTitle: "Инженер 2 категории",
        departament: "Сектор бизнес-планирования",
        departament_chief: 16,
        phoneNumber: "(62)33-31, +79044085248",
        role: ['user'],
        PKZI_name: "DNG_P-PostgresovSB",
        PKZI_date: "2023-06-24",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "9 этаж, к.932",
        map: "",
        official: ""
    },
    {
        id: 12,
        tabnumber: "1600473",
        surname: "Отладчиков",
        name: "Федор",
        patronymic: "Дебажевич",
        login: "OtladchikovFD",
        email: "OtladchikovFD@demoneftegaz.ru",
        photo: "",
        jobTitle: "Инженер 1 категории",
        departament: "Отдел землепользования",
        departament_chief: 16,
        phoneNumber: "(62)32-22, +79062085238",
        role: ['user'],
        PKZI_name: "DNG_P-OtladchikovFD",
        PKZI_date: "2023-03-14",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "3 этаж, к.332",
        map: "",
        official: "ДНГ Главный маркшейдер"
    },
    {
        id: 13,
        tabnumber: "1605678",
        surname: "Повершелова",
        name: "Ирина",
        patronymic: "Скриптовна",
        login: "PowershelovaIS",
        email: "PowershelovaIS@demoneftegaz.ru",
        photo: "",
        jobTitle: "Инженер",
        departament: "Управление по работе с персоналом",
        departament_chief: 16,
        phoneNumber: "(62)12-12, +79023080000",
        role: ['user'],
        PKZI_name: "DNG_P-PowershelovaIS",
        PKZI_date: "2023-01-11",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "1 этаж, к.3",
        map: "",
        official: "ДНГ Приемная ЗГД по персоналу"
    },
    {
        id: 14,
        tabnumber: "1602354",
        surname: "Перлов",
        name: "Василий",
        patronymic: "Пайтонович",
        login: "PerlovVP",
        email: "PerlovVP@demoneftegaz.ru",
        photo: "",
        jobTitle: "Специалист",
        departament: "Планово-бюджетное управление",
        departament_chief: 16,
        phoneNumber: "(62)14-01, +79011080000",
        role: ['user'],
        PKZI_name: "DNG_P-PerlovVP",
        PKZI_date: "2023-08-12",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "3 этаж, к.37",
        map: "",
        official: "ДНГ Планово-бюджетное управление"
    },
    {
        id: 15,
        tabnumber: "1609921",
        surname: "Джавова",
        name: "Яна",
        patronymic: "Лисповна",
        login: "JavovaJaL",
        email: "JavovaJaL@demoneftegaz.ru",
        photo: "",
        jobTitle: "Специалист",
        departament: "Управление по охране труда",
        departament_chief: 16,
        phoneNumber: "(62)15-01, +79022080300",
        role: ['user'],
        PKZI_name: "DNG_P-JavovaJaL",
        PKZI_date: "2023-02-02",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "3 этаж, к.36",
        map: "",
        official: "ДНГ Управление по охране труда"
    },
    {
        id: 16,
        tabnumber: "1600001",
        surname: "Хаскелев",
        name: "Семен",
        patronymic: "Игоревич",
        login: "HakelevSI",
        email: "HakelevSI@demoneftegaz.ru",
        photo: "",
        jobTitle: "Главный инженер",
        departament: "Руководство",
        departament_chief: 16,
        phoneNumber: "(62)20-01, +79022080301",
        role: ['user'],
        PKZI_name: "DNG_P-HakelevSI",
        PKZI_date: "2023-02-04",
        adress: "г.Демо, Продуктовый проспект, 40",
        description: "3 этаж, к.31",
        map: "",
        official: "ДНГ Руководство"
    },
]