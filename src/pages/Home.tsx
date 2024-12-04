import React from "react";
import { Link } from "react-router";
import imgPath from "@assets/img/first-section-bg-image.png";
import CardGallery from "@components/Slider";
import {
	Box,
	Button,
	Card,
	CardContent,
	Typography,
	IconButton,
} from "@mui/material";
import GridComponent from "@components/GridComponent";
import erLogo from "@assets/icons/er-logo.png";
import gorLogo from "@assets/icons/gorenje-logo.png";
import meiLogo from "@assets/icons/mei-logo.png";
import mosoblLogo from "@assets/icons/mosobl-logo.png";
import pgcLogo from "@assets/icons/pgc-logo.png";
import raffLogo from "@assets/icons/raff-logo.png";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";

import { aboutProductData, companies } from "consts/data";
import OverlappingSlider from "@components/OverlapingSlider";
import AboutProductSection from "widgets/Sections/AboutProduct";
import { ICaseDataItem, IDemoDataItem } from "types";
import CasesSection from "widgets/Sections/Cases";

function Home() {
	const companiesImgPaths = [
		erLogo,
		gorLogo,
		meiLogo,
		mosoblLogo,
		pgcLogo,
		raffLogo,
	];

	const demoData: IDemoDataItem[] = [
		{
			title: "Управление анкетами",
			content:
				"С помощью этого модуля вы сможете создавать анкеты, публиковать их для заполнения и делиться результатами. Это отличный способ собрать нужную информацию быстро и эффективно.",
			imgPath: "/demo-slides/slide-1.png",
		},
		{
			title: "Стилизация",
			content:
				"Персонализируйте свою анкету, выбрав настройки, соответствующие вашему корпоративному стилю. Выделитесь среди других пользователей, показав свою индивидуальность.",
			imgPath: "/demo-slides/slide-2.png",
		},
		{
			title: "Мобильная адаптивность",
			content:
				"Заполнять анкету можно с любого мобильного устройства. Система запоминает ваши ответы, так что вы можете начать работу на компьютере и продолжить на смартфоне.",
			imgPath: "/demo-slides/slide-3.png",
		},
		{
			title: "Гибкая настройка",
			content:
				"Анкета может быть настроена под ваши нужды. Выбирайте типы вопросов, добавляйте пользовательские поля и устанавливайте различные правила для ответов.",
			imgPath: "/demo-slides/slide-4.png",
		},
	];

	const caseData: ICaseDataItem[] = [
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

	return (
		<>
			<section className="section-home">
				<img className="background-image" src={imgPath} alt="section-bg" />
				<div className="background-container"></div>
				<div className="section-home-content">
					<div className="section-home-header">
						<span className="section-home-title">
							KPI MONITOR Анкетирование
						</span>
						<span className="section-home-subtitle"> — </span>
						<span className="section-home-subtitle">
							сервис для создания опросов
						</span>
					</div>
					<div className="section-home-description">
						<div className="section-description-title">О программе</div>
						<div className="section-description-content">
							Модуль позволяет настроить любую анкету и провести анкетирование
							среди сотрудников вашей компании или более широкого круга лиц.
							Настраивайте произвольные вопросы, логику заполнения и стилизацию
							и получайте статистику по заполнениям в режиме реального времени
							на интерактивных дашбордах.
						</div>
					</div>
				</div>
			</section>

			<section className="section-clients">
				<Typography>
					Нашей компании доверяют более 50 клиентов из различных <br />
					сфер: финансы, энергетика, ритейл и другие.
				</Typography>

				<CardGallery
					mobileSlidesToShow={2}
					laptopSlidesToShow={4}
					desctopSlidesToShow={5}
				>
					{companies.map((item, index) => {
						const imgPath = companiesImgPaths[index];
						return (
							<div key={index} className="my-slide">
								<div className="card">
									<div className="card-title">{item.name}</div>
									<img src={imgPath} alt={"logo" + item.name} />
								</div>
							</div>
						);
					})}
				</CardGallery>
			</section>
			<AboutProductSection data={demoData} />
			<CasesSection data={caseData} />
			<section className="section">
				<div className="section-title">Прайс и комплектация</div>
				<div className="text">
					Мы предлагаем возможность выбора{" "}
					<span>коробочной или облачной версии</span>.
				</div>
				<div className="cloud-version">
					<div className="version-title">Облачная версия</div>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Демо-доступ</th>
								<th>Базовая лицензия</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Стоимость</td>
								<td>Бесплатно </td>
								<td>5000 ₽/месяц</td>
							</tr>
							<tr>
								<td>Количество анкет</td>
								<td>2 </td>
								<td>∞</td>
							</tr>
							<tr>
								<td>Количество администраторов</td>
								<td>1 </td>
								<td>5</td>
							</tr>
							<tr>
								<td>Количество собранных ответов</td>
								<td>50 </td>
								<td>∞</td>
							</tr>
							<tr>
								<td>Количество ссылок на заполнение</td>
								<td>2 </td>
								<td>∞</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="box-version">
					<div className="version-title">Коробочная версия</div>
					<div className="text">
						Стоимость коробочной версии может варьироваться, поэтому просим вас
						оставить заявку на запрос цены, и наш менеджер свяжется с вами
						в ближайшее время.
					</div>
					<Link to="/login" className="link-to-login">
						<div className="link-content">Запросить цену</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>
				</div>
			</section>
		</>
	);
}

export default Home;
// Стоимость
// Количество анкет
// Количество администраторов
// Количество собранных ответов
// Количество ссылок на заполнение
