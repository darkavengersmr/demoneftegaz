import { INews } from "../../interfaces/interfaces";

import ahu1 from "../../img/ahu1.jpg";
import ahu2 from "../../img/ahu2.jpg"

export const someNews: INews[] = [
  {
    id: 1,
    typeOfNews: "news",
    coverImageUrl: ahu1,
    title: "Ремонт 4 этажа",
    date: "14.09.2022",
    description: "Закончен ремонт помещений на 4 этаже",
    content: `Рады сообщить, что ремонт помещений на 4 этаже завершен, все сотрудники размещены
    на своих рабочих местах. В планах на октябрь-ноябрь - ремонт 5 этажа.
    `,
  },
  {
    id: 2,
    typeOfNews: "news",
    coverImageUrl: ahu2,
    title: "Смена поставщика воды",
    date: "16.09.2022",
    description: `Кристальная заменяется на Волжанку`,
    content: `Сообщаем, что с 15.09.2022 поставляемая в офис питьевая вода будет заменена на 
    "Волжанку", в связи с многочисленными просьбами сотрудников`
  },  
];
