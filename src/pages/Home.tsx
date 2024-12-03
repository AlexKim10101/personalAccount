import React from "react";
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

import { aboutProductData, companies } from "consts/data";
import OverlappingSlider from "@components/OverlapingSlider";
import AboutProductSection from "widgets/Sections/AboutProduct";
import { IDemoDataItem } from "types";

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
		</>
	);
}

export default Home;

// <section className="section-about-product">
// 	<div className="section-about-product-title">О продукте</div>
// 	<div className="desctop-version">
// 		<GridComponent data={aboutProductData} />
// 	</div>
// 	<div className="mobile-version">
// 		<CardGallery
// 			mobileSlidesToShow={1}
// 			laptopSlidesToShow={3}
// 			desctopSlidesToShow={4}
// 		>
// 			{aboutProductData.map((item, index) => {
// 				const imgPath = imgPaths[index];

// 				return (
// 					<div key={"galleryProductItem" + index}>
// 						<div className="product-item">
// 							<div className="product-item-header">
// 								<div className="product-icon-wrapper">{item.logo}</div>
// 								{/* <img src={imgPath} /> */}
// 								<div className="product-item-title">{item.title}</div>
// 							</div>

// 							<div className="product-item-content">
// 								{item.content.length === 1 ? (
// 									<Typography>{item.content[0]}</Typography>
// 								) : (
// 									<ul className="product-list">
// 										{item.content.map((itemContent, index) => (
// 											<li
// 												className="product-list-item"
// 												key={"productItem" + index}
// 											>
// 												{itemContent}
// 											</li>
// 										))}
// 									</ul>
// 								)}
// 							</div>
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</CardGallery>
// 	</div>
// </section>;
