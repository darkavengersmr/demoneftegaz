import { dateNow } from "../../helpers/helpers";
import { IHallOfFame } from "../../interfaces/interfaces";

export const initialHallOfFame: IHallOfFame[] = [
    {
        id: 0,
        awarder_id: 1,
        rewarder_id: 16,
        award: "Хотел бы выразить благодарность Яве Скриптовне. Она настоящий профессионал своего дела. Грамотно решает самые сложные вопросы и находит выход из казалось бы безвыходных ситуаций",
        official: false,
        create_date: dateNow(-9),
        create_time: "11:06"
    },
    {
        id: 1,
        awarder_id: 4,
        rewarder_id: 16,
        award: "Безоговорочный лидер по числу благодарностей от партнеров и заказчиков. 17.06.2022 поступила очередная официальная благодарность №ДНГ/214-22 от АО Тестнефтегаз за оказанную консультацию по настройке ИС АМУР, внедряемой в Обществе",
        official: true,
        create_date: dateNow(-4),
        create_time: "10:55"
    },
    {
        id: 2,
        awarder_id: 7,
        rewarder_id: 16,
        award: "Восхищена результативности работы Дениса. Настоящий повелитель больших данных. Лучший в своем деле. Профессионал с большой буквы.",
        official: false,
        create_date: dateNow(-2),
        create_time: "17:05"
    },
    {
        id: 3,
        awarder_id: 18,
        rewarder_id: 16,
        award: "Мастер золотые руки. Коллеги уважают, руководство ценит. Молодец, одним словом.",
        official: false,
        create_date: dateNow(-9),
        create_time: "12:22"
    },
    {
        id: 4,
        awarder_id: 5,
        rewarder_id: 16,
        award: "Александр Тестович выручил весь отдел автоматизировав формирование отчетности макросами в LibreOffice. Теперь нам не нужен никакой Excel, будем импортозамещаться!",
        official: false,
        create_date: dateNow(-5),
        create_time: "11:55"
    },
    {
        id: 5,
        awarder_id: 10,
        rewarder_id: 16,
        award: "Дарья постоянно выручает нас по хозяйственной части. Все всегда в порядке, все в срок. Дарья, спасибо, очень прияно с Вами работать!",
        official: false,
        create_date: dateNow(-7),
        create_time: "14:55"
    },
    {
        id: 6,
        awarder_id: 17,
        rewarder_id: 16,
        award: "27.06.2022 поступила официальная благодарность №ДНГ/218-22 от АО Мокпримернефтегаз, в которой отмечен огромный вклад Ивана Скаляровича в проект внедрения импортозамещающего оборудования в короткие сроки",
        official: true,
        create_date: dateNow(-2),
        create_time: "10:55"
    },
    {
        id: 7,
        awarder_id: 3,
        rewarder_id: 16,
        award: "Поступила официальная благодарность №ДНГ/226-22 02.08.22 от АО Дружбанефтегаз. Заказчик благодарит Веронику Порталовну за беспрецендентно оперативное восстановление сервисов сбора данных с оборудования АСУТП, что позволило предотвратить серьезную аварию на производстве",
        official: true,
        create_date: dateNow(-3),
        create_time: "13:55"
    },
    {
        id: 8,
        awarder_id: 18,
        rewarder_id: 16,
        award: "01.09.2022 поступила официальная благодарность №ДНГ/232-22 мастеру цеха №5 Воркерову П.С. за досрочно выполненные работы по обслуживанию оборудования контроля добычи, что позволило на 3 суток сократить время простоя установок на 4 участке Демоволского месторождения",
        official: true,
        create_date: dateNow(-8),
        create_time: "10:25"
    },
    {
        id: 9,
        awarder_id: 26,
        rewarder_id: 16,
        award: "14.09.2022 поступила официальная благодарность №ДНГ/241-22 Ассемблеровой В.Б. от ООО Демонефтегаз-склад. Коллеги отмечают неоценимый вклад Василисы Байтовны в настройку интеграции учетной системы Общества с ИС ПБУ АО Демонефтегаз",
        official: true,
        create_date: dateNow(-5),
        create_time: "10:25"
    },
]