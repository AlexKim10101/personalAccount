import React from "react";
import { Link } from "react-router";
import { Typography } from "@mui/material";
import Icons from "@components/Icon";
import "./footer.css";
import { ReactComponent as LogoIcon } from "@assets/icons/logo_kpi.svg";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as AddressIcon } from "@assets/icons/address-icon.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone-icon.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail-icon.svg";
import { INavItem } from "types";

type IFooterProps = {
	logo: {
		url: string;
		to: string;
	};
	navigation: INavItem[];
};

const Footer: React.FC<IFooterProps> = ({ logo, navigation }) => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-left-section">
					<div className="footer-nav">
						<Link to={logo.to}>
							<Typography
								key="logo"
								sx={{
									display: "block",
									color: "inherit",
									textDecoration: "none",
									margin: "0px",
								}}
							>
								<Icons path={logo.url} id="logo" size={40} />
							</Typography>
						</Link>
						{navigation.map(item => (
							<Typography
								key={item.title}
								component={Link}
								to={item.path}
								sx={{
									display: "flex",
									alignItems: "center",
									color: "inherit",
									fontFamily: "inherit",
									textDecoration: "none",
									margin: "0px",
									"&:hover": { textDecoration: "underline" },
								}}
							>
								{item.title}
							</Typography>
						))}
					</div>

					<Link to="/login" className="link link-orange footer-link">
						<div className="link-content">Попробовать</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>

					<div className="footer-header">
						<Typography
							key="logo"
							sx={{
								display: "block",
								color: "inherit",
								textDecoration: "none",
								margin: "0px",
							}}
						>
							<Icons path={logo.url} id="logo" size={40} />
						</Typography>
						KPI MONITOR Анкетирование
					</div>

					<div className="footer-text">
						Решение KPI MONITOR Анкетирование входит в состав программного
						продукта KPI MONITOR Analyzer в качестве модуля анкетирования. KPI
						MONITOR Анкетирование может выступать самостоятельным продуктом для
						формирования анкет и сбора ответов, но механизмы визуализации
						полученных данных доступны только в программном продукте KPI MONITOR
						Analyzer.
					</div>
				</div>

				<div className="footer-left-right">
					<div className="footer-info-container">
						<div className="">
							<ul className="info-list">
								<li className="info-list-item">
									<div className="footer-icon-wrap">
										<AddressIcon />
									</div>
									<div className="info-item-content">
										111250, г. Москва, проезд Завода "Серп и Молот", д. 6
										корп.1, Бизнес центр "РОСТЭК"
									</div>
								</li>
								<li className="info-list-item">
									<div className="footer-icon-wrap">
										<PhoneIcon />
									</div>
									<div className="info-item-content">
										<div>+7 (495)662-11-31</div>
										<div>+7 (495)662-11-32</div>
										<div>+7 (495)662-11-33</div>
									</div>
								</li>
								<li className="info-list-item">
									<div className="footer-icon-wrap">
										<MailIcon />
									</div>
									<div className="info-item-content">info@kpi-monitor.ru</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
