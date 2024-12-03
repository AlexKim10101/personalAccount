import { ReactComponent as FlagIcon } from "@assets/icons/ic_flag.svg";
import { ReactComponent as ConstructIcon } from "@assets/icons/ic_constructor.svg";
import { ReactComponent as AnsIcon } from "@assets/icons/ic_collect.svg";
import { ReactComponent as ChartIcon } from "@assets/icons/ic_chart.svg";
import { ReactComponent as GroupIcon } from "@assets/icons/ic_group.svg";
import { ReactComponent as AutoIcon } from "@assets/icons/ic_auto.svg";
import { IAboutProductItem } from "types";

export const companies = [
	{ name: "Телекоммуникация", path: "" },
	{ name: "Ритейл", path: "" },
	{ name: "Образование", path: "" },
	{ name: "Энергетика", path: "" },
	{ name: "Логистика", path: "" },
	{ name: "Финансы", path: "" },
];

export const aboutProductData: IAboutProductItem[] = [
	{
		logo: <FlagIcon />,
		title: "Российское ПО",
		content: [
			"Полностью российская разработка, KPI MONITOR и KPI MONITOR Анкетирование входят в Единый реестр российских программ.",
		],
	},
	{
		logo: <ConstructIcon />,
		title: "Конструктор анкет",
		content: [
			"Гибкая настройка",
			"Различные типы вопросов с пользовательскими параметрами",
			"Прикрепление медиафайлов к вопросам",
			"Таймер на заполение",
			"Произвольная стилизация анкеты",
		],
	},
	{
		logo: <AnsIcon />,
		title: "Сбор ответов",
		content: [
			"Пользовательских ссылок на прохождение анкет",
			"Статистика по сбору ответов онлайн",
			"Настройка защиты от повторных заполнений",
		],
	},
	{
		logo: <ChartIcon />,
		title: "Анализ результатов",
		content: [
			"Интеграция с BI функционалом KPI MONITOR Analyzer для произвольного отображения результатов",
			"Открытый API",
			"Выгрузка результатов анкетирования в excel/pdf",
		],
	},
	{
		logo: <GroupIcon />,
		title: "Совместное использование",
		content: [
			"Разграничение уровней видимости созданных анкет",
			"Совместное редактирование анкет",
			"Публикация результатов анкет коллегам и знакомым",
		],
	},
	{
		logo: <AutoIcon />,
		title: "Автоматизация",
		content: [
			"Настройка правил для проверки корректности заполнения",
			"Условия видимости вопросов и страниц анкеты",
			"Завершение анкетирования по сроку или сбору необходимого числа ответов",
		],
	},
];
