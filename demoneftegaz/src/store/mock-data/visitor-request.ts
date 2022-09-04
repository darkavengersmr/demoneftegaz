import { IVisitorRequest } from "../../interfaces/interfaces";

export const initialVisitorRequest: IVisitorRequest[] = [
    {
        id: 0,
        number: "ДНГ/П/1",
        visitorType: 'Работник "АО Демонефтегаз"',
        visitorList: 'Демиургов С.В.',
        justification: 'Подписание договора',
        date: "12.09.2022",
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
        date: "14.09.2022",
        time_in: "13:00",
        time_out: "16:00",
        owner: 0,
        apply: false
    },
    {
        id: 2,
        number: "ДНГ/П/3",
        visitorType: 'Работник сторонней организации',
        visitorList: 'Хелперов В.К., Софтинова Л.А.',
        justification: 'Обслуживание АРМ топ-менедеров',
        date: "14.09.2022",
        time_in: "8:00",
        time_out: "17:00",
        owner: 0,
        apply: false        
    },
]
