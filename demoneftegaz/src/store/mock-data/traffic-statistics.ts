import { dateNow } from "../../helpers/helpers";
import { ITrafficStatistics } from "../../interfaces/interfaces";

export const initialTrafficStatistics: ITrafficStatistics = {
    days: [6,5,4,3,2,1,0].map((el) => dateNow(el).slice(0,5)),
    data: [
        {
            title: "Справочники",
            color: "#ff0000",
            params: [430, 375, 184, 137, 424, 574, 232].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "Файлы",
            color: "#00ff00",
            params: [432, 512, 179, 134, 577, 424, 542].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "Заявки/СЗ",
            color: "#0000ff",
            params: [398, 299, 192, 127, 489, 387, 931].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
]}
    

