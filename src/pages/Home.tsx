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

function Home() {
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

				<CardGallery />
			</section>

			<section className="section-about-product">
				<Typography>О продукте</Typography>
			</section>
		</>
	);
}

export default Home;
