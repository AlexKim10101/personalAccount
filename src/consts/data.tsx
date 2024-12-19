import {
	IAboutProductItem,
	IAccountData,
	ICaseDataItem,
	IDemoDataItem,
	ITableField,
} from "types";

export const KPI_MONITOR_URL = "https://kpi-monitor.ru";

export const accountLinksData = [
	{
		id: "accountLink_1",
		title: "Лицензии",
		url: "/account/license",
	},
	{
		id: "accountLink_2",
		title: "Домен",
		url: "/account/domens",
	},
	{
		id: "accountLink_3",
		title: "Пользователи",
		url: "/account/users",
	},
];

export const domens = [
	{
		id: "domen_1",
		title: "Домен анкеты",
		value: "https://kpi-monitor.survey.ru",
	},
	{
		id: "domen_2",
		title: "Домен конфигуратора",
		value: "https://kpi-monitor.survey_settings.ru",
	},
];

export const FAKE_ACCOUNT_DATA: IAccountData = {
	id: "user_0",
	name: "Иванов Иван Иванович",
	email: "ivan@ivanov.ru",
	password: "123456",
};

export const FAKE_USERS_DATA: IAccountData[] = [
	{
		id: "user_1",
		name: "Иванов Иван Иванович",
		email: "petrovanatoliy@pochta_1.ru",
		password: "qwerty",
	},
	{
		id: "user_2",
		name: "Иванов Иван Иванович",
		email: "petrovanatoliy@pochta_2.ru",
		password: "qwerty",
	},
	{
		id: "user_3",
		name: "Иванов Иван Иванович",
		email: "petrovanatoliy@pochta_3.ru",
		password: "qwerty",
	},
	{
		id: "user_4",
		name: "Иванов Иван Иванович",
		email: "petrovanatoliy@pochta_4.ru",
		password: "qwerty",
	},
];

export const SCROLL_LIMIT = 2500;

export const anchorData = [
	{ name: "Главная", path: "#home" },
	{ name: "О продукте", path: "#about-product" },
	{ name: "Кейсы", path: "#cases" },
	{ name: "Прайс и комплектации", path: "#prices" },
	{ name: "Документация", path: "#documentation" },
	{ name: "Контакты", path: "#contacts" },
];

export const companies = [
	{ name: "Телекоммуникация", path: "/main-slides/slide-1.png" },
	{ name: "Ритейл", path: "/main-slides/slide-2.png" },
	{ name: "Образование", path: "/main-slides/slide-3.png" },
	{ name: "Энергетика", path: "/main-slides/slide-4.png" },
	{ name: "Логистика", path: "/main-slides/slide-5.png" },
	{ name: "Финансы", path: "/main-slides/slide-6.png" },
];

export const aboutProductData: IAboutProductItem[] = [
	{
		title: "Российское ПО",
		content: [
			"Полностью российская разработка, KPI MONITOR и KPI MONITOR Анкетирование входят в Единый реестр российских программ.",
		],
		path: "icons/ic_flag.svg",
	},
	{
		title: "Конструктор анкет",
		content: [
			"Гибкая настройка",
			"Различные типы вопросов с пользовательскими параметрами",
			"Прикрепление медиафайлов к вопросам",
			"Таймер на заполение",
			"Произвольная стилизация анкеты",
		],
		path: "icons/ic_constructor.svg",
	},
	{
		title: "Сбор ответов",
		content: [
			"Пользовательских ссылок на прохождение анкет",
			"Статистика по сбору ответов онлайн",
			"Настройка защиты от повторных заполнений",
		],
		path: "icons/ic_collect.svg",
	},
	{
		title: "Анализ результатов",
		content: [
			"Интеграция с BI функционалом KPI MONITOR Analyzer для произвольного отображения результатов",
			"Открытый API",
			"Выгрузка результатов анкетирования в excel/pdf",
		],
		path: "icons/ic_chart.svg",
	},
	{
		title: "Совместное использование",
		content: [
			"Разграничение уровней видимости созданных анкет",
			"Совместное редактирование анкет",
			"Публикация результатов анкет коллегам и знакомым",
		],
		path: "icons/ic_group.svg",
	},
	{
		title: "Автоматизация",
		content: [
			"Настройка правил для проверки корректности заполнения",
			"Условия видимости вопросов и страниц анкеты",
			"Завершение анкетирования по сроку или сбору необходимого числа ответов",
		],
		path: "icons/ic_auto.svg",
	},
];

export const demoData: IDemoDataItem[] = [
	{
		title: "Управление анкетами",
		content: [
			"С помощью этого модуля вы сможете создавать анкеты, публиковать их для заполнения и делиться результатами. Это отличный способ собрать нужную информацию быстро и эффективно.",
		],
		path: "/demo-slides/slide-1.png",
	},
	{
		title: "Стилизация",
		content: [
			"Персонализируйте свою анкету, выбрав настройки, соответствующие вашему корпоративному стилю. Выделитесь среди других пользователей, показав свою индивидуальность.",
		],
		path: "/demo-slides/slide-2.png",
	},
	{
		title: "Мобильная адаптивность",
		content: [
			"Заполнять анкету можно с любого мобильного устройства. Система запоминает ваши ответы, так что вы можете начать работу на компьютере и продолжить на смартфоне.",
		],
		path: "/demo-slides/slide-3.png",
	},
	{
		title: "Гибкая настройка",
		content: [
			"Анкета может быть настроена под ваши нужды. Выбирайте типы вопросов, добавляйте пользовательские поля и устанавливайте различные правила для ответов.",
		],
		path: "/demo-slides/slide-4.png",
	},
];

export const caseData: ICaseDataItem[] = [
	{
		caption: "Мониторинг Инклюзивной образовательной среды",
		description: {
			title:
				"Проведение Всероссийского Мониторинга Инклюзивной образовательной среды 2023",
			content:
				"Итогом работы стал интерактивный отчет о состоянии Инклюзивной образовательной среды каждого региона РФ с возможностью агрегации и оценки интегрального индекса РФ. Мониторинг проводился совместно с Федеральным центром по развитию инклюзивного общего и дополнительного образования.",
		},
		slides: [
			"/case-slides/case-one-slide1.jpg",
			"/case-slides/case-one-slide2.jpg",
			"/case-slides/case-one-slide3.jpg",
			"/case-slides/case-one-slide4.jpg",
			"/case-slides/case-one-slide5.jpg",
		],
		statisticPoints: [
			{ title: "Длительность кампании:", content: "2 месяца" },
			{ title: "Количество респондентов:", content: "146 тысяч" },
			{ title: "Объём результатов:", content: "20 Гб" },
			{ title: "Количество видов анкет:", content: "9 видов" },
		],
		functionPoints: {
			title: "Реализованный функционал:",
			content: [
				"Генерация и рассылка индивидуальных ссылок для каждой образовательной организации",
				"Применение правил логической корректности для получения достоверных данных",
				"Онлайн-мониторинг процесса заполнения анкет",
				"Применение индексного анализа полученных ответов",
				"Применение частоного анализа полученных ответов",
				"Применение кластерного анализа полученных ответов",
			],
		},
	},
	{
		caption: "Кампания по оценке результативности",
		description: {
			title:
				"Ежегодная кампания по оценке результативности кафедр Университета МЭИ",
			content:
				"На основе расчета показателей и собранной во время анкетирования информации ежегодно рассчитывается коэффициент результативности кафедр, влияющий на стратегию развития ВУЗа.",
		},
		slides: [
			"/case-slides/case-two-slide1.jpg",
			"/case-slides/case-two-slide2.jpg",
			"/case-slides/case-two-slide3.jpg",
		],
		statisticPoints: [
			{ title: "Число сотрудников:", content: "2 тысячи" },
			{ title: "Количество вопросов:", content: "63 вопроса" },
			{ title: "Среднее время заполнения анкеты:", content: "29 минут" },
			{ title: "Время обработки результатов:", content: "<1 секунды" },
		],
		functionPoints: {
			title: "Реализованный функционал:",
			content: [
				"Анализ корреляции ответов со значениями фактически достигнутых показателей",
				"Обработка результатов с применением нейронных сетей",
				"Напоминания о заполнении и уведомления о результатах на почту и в телеграм ",
				"Визуализация данных в виде рейтингов и радаров",
			],
		},
	},
];

export const tableFields: ITableField[] = [
	{ id: "price", title: "Стоимость" },
	{ id: "totalSurveys", title: "Количество анкет" },
	{ id: "totalAdmins", title: "Количество администраторов" },
	{ id: "responseCount", title: "Количество собранных ответов" },
	{ id: "linkCount", title: "Количество ссылок на заполнение" },
];

// export const versions: IVersionData[] = [
// 	{
// 		id: "demo",
// 		title: "Демо-доступ",
// 		data: {
// 			price: "Бесплатно",
// 			totalSurveys: "2",
// 			totalAdmins: "1",
// 			responseCount: "50",
// 			linkCount: "2",
// 		},
// 	},
// 	{
// 		id: "base",
// 		title: "Базовая лицензия",
// 		data: {
// 			price: "5000 ₽/месяц",
// 			totalSurveys: "∞",
// 			totalAdmins: "5",
// 			responseCount: "∞",
// 			linkCount: "∞",
// 		},
// 	},
// ];
