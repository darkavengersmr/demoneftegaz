import { dateNow } from "../../helpers/helpers"
import { IWorkPermit } from "../../interfaces/interfaces"

export const initialWorkPermit: IWorkPermit[] = [
    {
        id: 0,
        journal: "Журнал регистрации нарядов-допусков на проведение газоопасных работ",
        number: "ЖГ/120920221114",
        create_date: dateNow(-5),
        create_time: "11:14",        
        process_departament: "Цех ДНГ-5",
        person_issued: 17,
        person_received: 18,
        workplace: "Установка ДНГ-7",
        work_nature: "Монтаж оборудования",
        status: "Выполнен",
        complete_date: dateNow(-5),
        complete_time: "17:44"
    },
    {
        id: 1,
        journal: "Журнал регистрации нарядов-допусков на проведение газоопасных работ",
        number: "ЖГ/140920221011",
        create_date: dateNow(-4),
        create_time: "10:11",        
        process_departament: "Цех ДНГ-5",
        person_issued: 17,
        person_received: 19,
        workplace: "Установка ДНГ-11",
        work_nature: "Монтаж оборудования",
        status: "Выполнен",
        complete_date: dateNow(-4),
        complete_time: "16:20"
    },
    {
        id: 2,
        journal: "Журнал регистрации нарядов-допусков на проведение газоопасных работ",
        number: "ЖГ/150920220801",
        create_date: dateNow(-3),
        create_time: "08:01",        
        process_departament: "Цех ДНГ-5",
        person_issued: 17,
        person_received: 18,
        workplace: "Установка ДНГ-8",
        work_nature: "Монтаж оборудования",
        status: "Выдан",
        complete_date: "",
        complete_time: "",
    },
    {
        id: 3,
        journal: "Журнал регистрации нарядов-допусков на проведение газоопасных работ",
        number: "ЖГ/160920220921",
        create_date: dateNow(-3),
        create_time: "09:21",        
        process_departament: "Цех ДНГ-5",
        person_issued: 17,
        person_received: 18,
        workplace: "Установка ДНГ-10",
        work_nature: "Монтаж оборудования",
        status: "Выдан",
        complete_date: "",
        complete_time: "",
    },
]

export const workPermitProcessDepartaments = [
    "Цех ДНГ-1",
    "Цех ДНГ-2",
    "Цех ДНГ-3",
    "Цех ДНГ-4 участок 1",
    "Цех ДНГ-4 участок 2",
    "Цех ДНГ-5",
    "Цех ДНГ-6",
    "Цех ДНГ-7 участок 1",
    "Цех ДНГ-7 участок 2"
]