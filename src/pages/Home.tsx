import React from "react";
import { Link } from "react-router";
import imgPath from "@assets/img/first-section-bg-image.png";
import CardGallery from "@components/Slider";
import { Typography } from "@mui/material";
import erLogo from "@assets/icons/er-logo.png";
import gorLogo from "@assets/icons/gorenje-logo.png";
import meiLogo from "@assets/icons/mei-logo.png";
import mosoblLogo from "@assets/icons/mosobl-logo.png";
import pgcLogo from "@assets/icons/pgc-logo.png";
import raffLogo from "@assets/icons/raff-logo.png";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as AddressIcon } from "@assets/icons/address-icon.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone-icon.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail-icon.svg";

import {
	caseData,
	companies,
	demoData,
	tableFields,
	versions,
} from "consts/data";
import AboutProductSection from "widgets/Sections/AboutProduct";
import CasesSection from "widgets/Sections/Cases";
import PriceSection from "widgets/Sections/Price";

function Home() {
	const companiesImgPaths = [
		erLogo,
		gorLogo,
		meiLogo,
		mosoblLogo,
		pgcLogo,
		raffLogo,
	];

	return (
		<>
			<section className="section-home" id="home">
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
				<div className="text">
					Нашей компании доверяют более 50 клиентов из различных <br />
					сфер: финансы, энергетика, ритейл и другие.
				</div>
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
			<PriceSection versions={versions} tableFields={tableFields} />
			<section className="section" id="documentation">
				<div className="section-title">Документация</div>
				<div className="text">
					Вы можете ознакомиться с презентацией возможностей продукта,
					инструкцией по установке ПО и руководством пользователя.
				</div>
				<div className="link-container">
					<Link to="/login" className="link link-orange link-width">
						<div className="link-content">Презентация возможностей</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>
					<Link to="/login" className="link link-orange-mob link-width">
						<div className="link-content">Инструкция по установке ПО</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>
					<Link to="/login" className="link link-orange link-width">
						<div className="link-content">Руководство пользователя</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>
				</div>
			</section>

			<section className="section" id="contacts">
				<div className="info-wrapper">
					<div className="section-title title-width">Контакты</div>
					<div className="text">
						Мы будем рады ответить на любые вопросы.
						<br />
						Специалисты на связи каждый будний день с 10 до 19.
					</div>
					<div className="info-container">
						<div className="info-part">
							<ul className="info-list">
								<li className="info-list-item">
									<div className="icon-wrap">
										<AddressIcon />
									</div>
									<div className="info-item-content">
										111250, г. Москва, проезд Завода "Серп и Молот", д. 6
										корп.1, Бизнес центр "РОСТЭК"
									</div>
								</li>
								<li className="info-list-item">
									<div className="icon-wrap">
										<PhoneIcon />
									</div>
									<div className="info-item-content">
										<div>+7 (495)662-11-31</div>
										<div>+7 (495)662-11-32</div>
										<div>+7 (495)662-11-33</div>
									</div>
								</li>
								<li className="info-list-item">
									<div className="icon-wrap">
										<MailIcon />
									</div>
									<div className="info-item-content">info@kpi-monitor.ru</div>
								</li>
							</ul>
						</div>
						<div className="divider-adaptive"></div>
						<div className="info-part">
							<div className="info-text">
								Также вы можете бесплатно испытать наш продукт, чтобы лично
								оценить его возможности в демо-версии.Для покупки полной версии
								с вами свяжется наш менеджер и уточнит все детали.
							</div>

							<Link to="/login" className="link link-orange link-flex-end">
								<div className="link-content">Попробовать</div>
								<div className="link-content">
									<ArrowIcon />
								</div>
							</Link>
						</div>
					</div>
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
