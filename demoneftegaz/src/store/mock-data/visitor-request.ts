import { dateNow } from "../../helpers/helpers";
import { IVisitorRequest } from "../../interfaces/interfaces";

export const initialVisitorRequest: IVisitorRequest[] = [
    {
        id: 0,
        number: "ДНГ/П/1",
        visitorType: 'Работник "АО Демонефтегаз"',
        visitorList: 'Сишникова Е.Л., Плюсов Р.А.',
        justification: 'Подписание договора',
        date: dateNow(-9),
        time_in: "11:00",
        time_out: "13:00",
        owner: 4,
        apply: true
    },
    {
        id: 1,
        number: "ДНГ/П/2",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Байкалов С.П., Эльбрусов К.М.',
        justification: 'Презентация оборудования в рамках импортозамещения',
        date: dateNow(-8),
        time_in: "13:00",
        time_out: "16:00",
        owner: 0,
        apply: true
    },
    {
        id: 2,
        number: "ДНГ/П/3",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Хелперов В.К., Софтинова Л.А.',
        justification: 'Обслуживание АРМ топ-менедеров',
        date: dateNow(-7),
        time_in: "8:00",
        time_out: "17:00",
        owner: 0,
        apply: true        
    },
    {
        id: 3,
        number: "ДНГ/П/4",
        visitorType: 'Работник "АО Демонефтегаз"',
        visitorList: 'Голангов С.С.',
        justification: 'Участие в совещании',
        date: dateNow(-6),
        time_in: "11:00",
        time_out: "13:00",
        owner: 4,
        apply: true
    },
    {
        id: 4,
        number: "ДНГ/П/5",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Алговов П.П., Коболова Е.А.',
        justification: 'Презентация ПО виртуализации в рамках импортозамещения',
        date: dateNow(-5),
        time_in: "13:00",
        time_out: "16:00",
        owner: 0,
        apply: false
    },
    {
        id: 5,
        number: "ДНГ/П/6",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Лаушник Е.Ф.',
        justification: 'Закупочный тендер',
        date: dateNow(-4),
        time_in: "8:00",
        time_out: "17:00",
        owner: 0,
        apply: true        
    },
    {
        id: 6,
        number: "ДНГ/П/7",
        visitorType: 'Работник "АО Демонефтегаз"',
        visitorList: 'Паскаль А.М.',
        justification: 'Участие в совещании',
        date: dateNow(-3),
        time_in: "11:00",
        time_out: "13:00",
        owner: 4,
        apply: false
    },
    {
        id: 7,
        number: "ДНГ/П/8",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Демиургов С.В.',
        justification: 'Тендерные процедуры',
        date: dateNow(-2),
        time_in: "13:00",
        time_out: "16:00",
        owner: 0,
        apply: false
    },
    {
        id: 8,
        number: "ДНГ/П/9",
        visitorType: 'Работник "АО Демонефтегаз"',
        visitorList: 'Сишникова Ф.Р., Шарпов К.А.',
        justification: 'Участие в совещании рабочей группы',
        date: dateNow(-1),
        time_in: "11:00",
        time_out: "13:00",
        owner: 4,
        apply: false
    },
    {
        id: 9,
        number: "ДНГ/П/10",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Свифтов С.В.',
        justification: 'Передача пакета документации',
        date: dateNow(0),
        time_in: "13:00",
        time_out: "16:00",
        owner: 0,
        apply: false
    },
]
