import { dateNow } from "../../helpers/helpers";
import { IBacklogRequest} from "../../interfaces/interfaces";

export const initialBacklogRequest: IBacklogRequest[] = [
    {
        id: 0,
        requirement: `Разработка раздела "Материалы по закупкам"`,
        owner: 16,
        create_date: dateNow(-9),
        create_time: "11:52",
        status: "На рассмотрении проектной командой",
    },
    {
        id: 1,
        requirement: `Разработка раздела "Обучающие материалы по пакету офисных приложений"`,
        owner: 23,
        create_date: dateNow(-7),
        create_time: "10:34",
        status: "На рассмотрении проектной командой",
    },
    {
        id: 2,
        requirement: `Интеграция портала с внутренними ИС Общества`,
        owner: 16,
        create_date: dateNow(-6),
        create_time: "13:12",
        status: "Требуется детализация постановки задачи Заказчиком",
    },
    {
        id: 3,
        requirement: `Разработать иерархическую струкруру хранения для файлов (с возможностью создавать папки)`,
        owner: 16,
        create_date: dateNow(-5),
        create_time: "14:22",
        status: "На рассмотрении проектной командой",
    },
    {
        id: 4,
        requirement: `Разработать сервис интеграции с кадровой системой Общества (для синхронизации информации о работниках в телефонном справочнике и справочнике подразделений)`,
        owner: 12,
        create_date: dateNow(-5),
        create_time: "14:32",
        status: "На рассмотрении проектной командой",
    },
    {
        id: 5,
        requirement: `Разработать сервис интеграции с кадровой системой Общества (для синхронизации информации о работниках в телефонном справочнике и справочнике подразделений)`,
        owner: 12,
        create_date: dateNow(-4),
        create_time: "14:32",
        status: "На рассмотрении проектной командой",
    },
    {
        id: 6,
        requirement: `Разработать функционал для диспетчера транспортного управления (назначение водителя и автомобиля)`,
        owner: 12,
        create_date: dateNow(-4),
        create_time: "14:32",
        status: "На рассмотрении проектной командой",
    },
    {
        id: 7,
        requirement: `Разработать отчет по отсутствующим руководителям`,
        owner: 16,
        create_date: dateNow(-4),
        create_time: "14:32",
        status: "На рассмотрении проектной командой",
    },
]
