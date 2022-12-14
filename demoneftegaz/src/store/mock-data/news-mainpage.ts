import { INews } from "../../interfaces/interfaces";

import russia from "../../img/russia.jpg";
import opensource from "../../img/opensource.jpg"
import microservices from "../../img/microservices.png"
import architecture from "../../img/architecture.jpg";
import docker from "../../img/docker.png";
import { dateNow } from "../../helpers/helpers";

export const someNews: INews[] = [
  {
    id: 0,
    typeOfNews: "main",
    coverImageUrl: opensource,
    title: "Концепция новой версии портала Общества",
    date: dateNow(0),
    description: "Разработка нового функционала с использованием свободного программного обеспечения, уход от проприетарных портальных платформ. ",
    content: `Технологии разработки программного обеспечения, использумые средства его тестирования, 
    развертывания и обновления стремительно меняются. Решения, которые были разработаны 5-7 лет назад уже 
    не отвечают вызовам времени, трудоемки в поддержке и сложно модифицируемы. 
    Предлагаемый концепт основывается на современном стеке свободного ПО, максимальной модульности и 
    переиспользуемости компонент, как клиентских, так и серверных. Каждый обособленный бизнес-процесс 
    (например заказ транспорта) предполагается организовать в виде отдельной микрослужбы (микросервиса), 
    связанного при необходимости с другими микросервисами по шине событий. При обмене данными 
    на основе событий микрослужба публикует событие, когда происходит что-то важное, например, 
    когда она обновляет бизнес-объект. Другие микрослужбы подписываются на эти события, что обеспечивает
    их отказоустойчивое взаимодействие.    
    `,
  },
  {
    id: 1,
    typeOfNews: "main",
    coverImageUrl: architecture,
    title: "Архитектура новой версии портала Общества",
    date: dateNow(-1),
    description: "Основная идея предлагаемой архитектуры - возможность точечной модификации без ущерба для общей функциональности, отсутствие технических решений, которые будут сдерживать будущие запросы на актуализацию бизнес-логики",
    content: `Backend: микросервисная архитектура, набор API на Nodejs (авторизация, интеграции) и Python (микросервисы с 
      бизнес-логикой). Базы данных - PostgreSQL для основного набора микросервисов, MongoDB - для хранения метаинформации о хранящихся файлах. Брокер сообщений RabbitMQ для
      отказоустойчивого и асинхронного взаимодействия компонент системы между собой. Кэш на Redis - для 
      кэширования запросов пользователей с целью повышения производительности. Балансировщик и реверс-прокси
      на Nginx. Frontend: SPA микрофронтенды на React, с использованием MobX для хранилища и MaterialUI для
      унификации пользовательского интерфейса.
    `,
  },
  {
    id: 2,
    typeOfNews: "news",
    coverImageUrl: russia,
    title: "Импортозамещение ПО",
    date: dateNow(-1),
    description: `Импортозамещение ПО регулируется законодательными 
    нормативными актами РФ, согласно которым к 2024 году доля отечественного софта в 
    госструктурах должна превышать 90%, а в госкомпаниях — 70%.`,
    content: `Мероприятия по импортозамещению программного обеспечения стартовали в России еще несколько 
    лет назад, после первых серьезных санкций. Летом 2015 года был принят закон о создании Реестра 
    отечественного программного обеспечения, а в ноябре подписано постановление, вводящее для 
    госзаказчиков ограничения на закупку ПО, отсутствующего в Реестре. С 2025 года, в соответствии с 
    Указом Президента РФ[6], будет недопустимо использование западного софта в критической инфраструктуре, 
    а уже с 31 марта текущего года запрещена закупка импортного оборудования без соответствующего 
    согласования. Начался активный перевод госструктур на свободное ПО с открытым кодом и 
    импортонезависимые системы, разработанные российскими компаниями`,
  },
  {
    id: 3,
    typeOfNews: "news",
    coverImageUrl: microservices,
    title: "Что такое микросервисы",
    date: dateNow(-2),
    description: `Микросервисная архитектура приложения родилась из монолитной архитектуры, когда та 
    стала сложной и неудобной в работе. Главное отличие микросервисов от монолита – в использовании 
    специализированных более простых программ (модулей) при выполнении сценария приложения. `,
    content: `Каждый микросервис – это небольшая монолитная 
    программа, которая выполняет свою функцию. В программный продукт при разработке микросервисной 
    архитектуры можно добавлять любое количество новых микросервисов, расширяя его функциональность. 
    Чтобы добиться подобного в монолитной программе, необходимо вносить изменения в основной продукт. 
    Когда разные модули разработаны, остается просто 
    собрать их в единую систему. При этом каждый отдельный микросервис легко трансформировать в соответствии 
    с меняющимися требованиями рынка, не мешая при этом работе всего приложения. При микросервисной 
    архитектуре приложения можно обновлять ПО частями, что гораздо проще и безопаснее, чем обновление 
    «монолита». Приложение не выйдет из строя, если произойдет сбой одного или нескольких микросервисов. 
    Переход с монолитной архитектуры на микросервисы делает бизнес более мобильным и гибким. Компания 
    получает в свое распоряжение программу-конструктор, которая может оперативно подстраиваться под нужды 
    бизнеса.
    В предлагаемой архитектуре каждый каждый микросервис решает свою обособленную задачу,
    изолирован от логики и ошибок других сервисов. Таким образом, неполадки в одном из них не повлияют на работоспособность системы в целом.     
    Новым разработчикам легче включиться в рабочий процесс — необходимо изучить только конкретную 
    ответственность микросервиса, а не систему в целом, можно проводить работы только над определенной 
    частью системы.`,
  },
  {
    id: 4,
    typeOfNews: "news",
    coverImageUrl: docker,
    title: "Контейнеризация",
    date: dateNow(-3),
    description:
      "Технология контейнеризации построена на концепции изоляции приложений в обособленных пространствах (контейнерах). Контейнер самодостаточен и легко пересоздаётся, если нужно откатить изменения или провести ещё одно тестирование.",
    content: `Программа упаковывается в специальную оболочку-контейнер, внутри которой — среда, необходимая 
    для работы. Контейнеры можно создавать, описывать и развертывать, то есть запускать на устройстве, 
    закрывать и удалять, конфигурировать и настраивать, выделять им память и передавать данные от одного 
    к другому. Все это — работа с контейнеризацией. Наиболее популярная реализация технологии — Docker.
    Для портального решения технология нужна в первую очередь для разрешения конфликтов, которые могут 
    возникнуть из-за того, что разные приложения нуждаются в различных версиях рабочего окружения - 
    это позвволяет иметь в работу разнородный "зоопарк" компонентов, который невозможно иначе.
    Также плюсов будет возможность быстрого перемещения настроенных приложений и сред с одного сервера
    на другой, ускорение процесса разработки и снижения риска ошибок, контроль ресурсов и снижения нагрузки 
    на сервера, простота управления сложными приложениями.`,
  },
];
