import consultantPlus from "../../img/rs-consultant-plus.jpg"
import garant from "../../img/rs-garant.jpg"
import pbotos from "../../img/rs-pbotos.jpg"
import techExpert from "../../img/rs-techexpert.jpg"
import tmp1 from "../../img/rs-tmp1.jpg"
import tmp2 from "../../img/rs-tmp2.jpg"
import tmp3 from "../../img/rs-tmp3.jpg"
import tmp4 from "../../img/rs-tmp4.jpg"
import budget from "../../img/rs-budget.jpg"
import plan from "../../img/rs-plan.jpg"
import geo from "../../img/rs-geo.jpg"
import sed from "../../img/rs-sed.jpg"

import { IResourceList } from "../../interfaces/interfaces";

export const initialResourcesList: IResourceList[] = [
    {
      img: `${consultantPlus}`,
      title: 'Консультант Плюс',
      author: 'Законодательство РФ кодексы и законы в последней редакции', 
      owner: "Крутников О.В."
    },
    {
        img: `${tmp2}`,
        title: 'Система мониторинга',
        author: 'Единая система мониторинга событий безопасности',  
        owner: "Пургин Ф.С."    
    },
    {
      img: `${garant}`,
      title: 'Гарант',
      author: 'Справочно-правовая система по законодательству Российской Федерации',
      owner: "Крутников О.В."
    },      

    {
      img: `${tmp1}`,
      title: 'Система контроля добычи',
      author: 'Централизованная информационная система контроля добычи нефти и газа', 
      owner: "Пургин Ф.С."     
    },
    {
        img: `${pbotos}`,
        title: 'ИС ПБОТОС',
        author: 'ИС ПБОТОС представляет собой совокупность процессов, процедур, организационной структуры и ресурсов, используемых для результативного управления рисками, возможностями, контроля соответствия требованиям и постоянного улучшения показателей деятельности в области ПБОТОС.',
        owner: "Крутников О.В."
    }, 
    {
        img: `${techExpert}`,
        title: 'Техэксперт',
        author: 'Справочная система, предоставляющая нормативно-техническую, нормативно-правовую информацию',
        owner: "Пургин Ф.С."
    }, 
    {
        img: `${budget}`,
        title: 'Консультант Плюс',
        author: 'Законодательство РФ кодексы и законы в последней редакции',  
        owner: "Крутников О.В."          
    },
    {
        img: `${plan}`,
        title: 'Система планирования',
        author: 'Единая система планирования и фантазирования',    
        owner: "Крутников О.В."  
    },
    {   
        img: `${geo}`,
        title: 'Геопортал',
        author: 'Геопортал с самыми точными картами',
        owner: "Пургин Ф.С."
    },      
    {
        img: `${sed}`,
        title: 'Система электронного документооборота',
        author: 'Здесь самые свежие версии последних редакций документов',
        owner: "Крутников О.В."      
    },
    {
        img: `${tmp3}`,
        title: 'Система контроля месторождений',
        author: 'Информационная система контроля месторождений', 
        owner: "Крутников О.В."     
    },
    {
        img: `${tmp4}`,
        title: 'Система больших данных',
        author: 'Озеро данных c общим доступом и анализом данных',  
        owner: "Пургин Ф.С."    
    },

  ];