import { INews } from "../../interfaces/interfaces";

import ahu1 from "../../img/ahu1.jpg";
import ahu2 from "../../img/ahu2.jpg"
import { dateNow } from "../../helpers/helpers";

export const someNews: INews[] = [
  {
    id: 1,
    typeOfNews: "news",
    coverImageUrl: ahu1,
    title: "Ремонт 4 этажа",
    date: dateNow(-4),
    description: "Закончен ремонт помещений на 4 этаже",
    content: `Рады сообщить, что ремонт помещений на 4 этаже завершен, все сотрудники размещены
    на своих рабочих местах. В планах на ближайшие два месяца ремонт 5 этажа.
    `,
  },
  {
    id: 2,
    typeOfNews: "news",
    coverImageUrl: ahu2,
    title: "Смена поставщика воды",
    date: dateNow(-2),
    description: `Кристальная заменяется на Волжанку`,
    content: `Сообщаем, что с ${dateNow(0)} поставляемая в офис питьевая вода будет заменена на 
    "Волжанку", в связи с многочисленными просьбами сотрудников`
  },  
];
