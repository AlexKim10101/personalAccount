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

function Home() {
	const imgPaths = [erLogo, gorLogo, meiLogo, mosoblLogo, pgcLogo, raffLogo];

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
						const imgPath = imgPaths[index];
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

			<section className="section-about-product">
				<div className="section-about-product-title">О продукте</div>
				<div className="desctop-version">
					<GridComponent data={aboutProductData} />
				</div>
				<div className="mobile-version">
					<CardGallery
						mobileSlidesToShow={1}
						laptopSlidesToShow={3}
						desctopSlidesToShow={4}
					>
						{aboutProductData.map((item, index) => {
							const imgPath = imgPaths[index];

							return (
								<div key={"galleryProductItem" + index}>
									<div className="product-item">
										<div className="product-item-header">
											<div className="product-icon-wrapper">{item.logo}</div>
											{/* <img src={imgPath} /> */}
											<div className="product-item-title">{item.title}</div>
										</div>

										<div className="product-item-content">
											{item.content.length === 1 ? (
												<Typography>{item.content[0]}</Typography>
											) : (
												<ul className="product-list">
													{item.content.map((itemContent, index) => (
														<li
															className="product-list-item"
															key={"productItem" + index}
														>
															{itemContent}
														</li>
													))}
												</ul>
											)}
										</div>
									</div>
								</div>
							);
						})}
					</CardGallery>
				</div>
			</section>
		</>
	);
}

export default Home;
