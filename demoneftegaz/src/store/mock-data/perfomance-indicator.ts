import { dateNow } from "../../helpers/helpers";
import { IPerfomanceIndicatorData, IProductionData } from "../../interfaces/interfaces";

export const initialPerfomanceIndicator: IPerfomanceIndicatorData = {
    days: [6,5,4,3,2,1,0].map((el) => dateNow(el).slice(0,5)),
    data: [
        {
            title: "ДДНГ-1",
            color: "#0000ff",
            params: [200321, 198702, 187454, 199200, 188974, 202354, 200647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "ПДНГ-2",
            color: "#ffaa00",
            params: [204321, 174702, 189454, 206200, 188974, 174354, 181647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "ПДНГ-3",
            color: "#00ff00",
            params: [188321, 206702, 202454, 170200, 181974, 174354, 200647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "ПДНГ-4",
            color: "#ff0000",
            params: [112321, 122702, 116454, 107200, 110974, 121354, 122647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "НДНГ-5",
            color: "#5613AA",
            params: [134032, 146702, 156454, 132200, 112174, 132354, 133647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "НДНГ-6",
            color: "#00ffff",
            params: [102321, 133702, 122454, 134200, 123974, 112354, 116647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "МДНГ-7",
            color: "#ff00ff",
            params: [178321, 201702, 199454, 201200, 191974, 192354, 199647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
        {
            title: "МДНГ-8",
            color: "#22aaff",
            params: [169321, 169702, 170454, 173200, 168974, 178354, 122647].map((el) => el*0.75 + 0.25*(el*Math.random())),
        },
    ],
}

export const initialProductionData: IProductionData[] = [
    {
        title: "Добыча нефти",
        monthFact: 901066,
        monthFactProc: 102.1,
        yearFact: 6247985,
        yearFactProc: 90.3
    },
    {
        title: "Сдача нефти",
        monthFact: 911066,
        monthFactProc: 104.2,
        yearFact: 6257985,
        yearFactProc: 90.3
    },
    {
        title: "Добыча жидкости",
        monthFact: 6125,
        monthFactProc: 101.1,
        yearFact: 42985,
        yearFactProc: 96.3
    },
    {
        title: "Использование газа",
        monthFact: 37985,
        monthFactProc: 106,
        yearFact: 317932,
        yearFactProc: 93.4
    },
    {
        title: "Закачка эффективная",
        monthFact: 2478,
        monthFactProc: 103,
        yearFact: 21985,
        yearFactProc: 94.7
    },
]

