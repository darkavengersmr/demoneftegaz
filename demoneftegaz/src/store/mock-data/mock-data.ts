import { IPerfomanceIndicatorData, IUser } from "../../interfaces/interfaces";
import userPhoto from "../../img/user.jpg"

export const initialUser: IUser = {
    surname: "Тестов",
    name: "Демо",
    patronymic: "Мокович",
    login: "TestovDM",
    email: "TestovDM@demoneftegaz.ru",
    photo: `url(${userPhoto})`
}

export const initialPerfomanceIndicator: IPerfomanceIndicatorData = {
    days: ['12.сен','13.сен','14.сен','15.сен','16.сен','17.сен','18.сен'], 
    data: [
        {
            title: "ДДНГ-1",
            color: "#0000ff",
            params: [200321, 198702, 187454, 199200, 188974, 202354, 200647],
        },
        {
            title: "ПДНГ-2",
            color: "#ffaa00",
            params: [204321, 174702, 189454, 206200, 188974, 174354, 181647],
        },
        {
            title: "ПДНГ-3",
            color: "#00ff00",
            params: [188321, 206702, 202454, 170200, 181974, 174354, 200647],
        },
        {
            title: "ПДНГ-4",
            color: "#ff0000",
            params: [112321, 122702, 116454, 107200, 110974, 121354, 122647],
        },
        {
            title: "НДНГ-5",
            color: "#44ff66",
            params: [134032, 146702, 156454, 132200, 112174, 132354, 133647],
        },
        {
            title: "НДНГ-6",
            color: "#00ffff",
            params: [102321, 133702, 122454, 134200, 123974, 112354, 116647],
        },
        {
            title: "МДНГ-7",
            color: "#ff00ff",
            params: [178321, 201702, 199454, 201200, 191974, 192354, 199647],
        },
        {
            title: "МДНГ-8",
            color: "#22aaff",
            params: [169321, 169702, 170454, 173200, 168974, 178354, 122647],
        },
    ],
}

