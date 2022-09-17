import { dateNow } from "../../helpers/helpers";
import { IAskChief } from "../../interfaces/interfaces";

export const initialAskChief: IAskChief[] = [
    {
        id: 0, 
        title: "Вопрос по премированию ко дню нефтянника",
        question: "Здраствуйте! Прошу уточнить, планируется ли выплата премии ко дню нефтянника?",
        question_category: "Социальные вопросы",
        answer: "Здравствуйте! Да, выплата ко дню нефтянника планируется",
        create_date: dateNow(-8),
        create_time: "11:16",      
        owner: 0,
        status: "Рассмотрен"
    },
    {
        id: 1, 
        title: "Охрана парковки перед офисом на Атлоновом проспекте",
        question: "Здраствуйте! Возможно ли установить видеонаблюдение на парковке около офиса на Атлоновом проспекте?",
        question_category: "Прочие вопросы",
        answer: "",
        create_date: dateNow(-7),
        create_time: "10:23",      
        owner: 0,
        status: "На рассмотрении"
    },
    {
        id: 2, 
        title: "Выделение путевок членам семей сотрудников",
        question: "Здраствуйте! Возможно ли расширить лимиты по оплате путевок членам семьи работников?",
        question_category: "Социальные вопросы",
        answer: "",
        create_date: dateNow(-6),
        create_time: "13:44",      
        owner: 0,
        status: "На рассмотрении"
    },
    {
        id: 3, 
        title: "Доставка сотрудников на работу/с работы",
        question: "Здраствуйте! Если ли возможность пустить дополнительный маршрут служебного автобуса по ул.Зайцева, с остановкой на ул. Лебединой?",
        question_category: "Прочие вопросы",
        answer: "",
        create_date: dateNow(-4),
        create_time: "15:44",      
        owner: 0,
        status: "На рассмотрении"
    },
]