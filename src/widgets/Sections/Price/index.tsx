import React from "react";
import { Link } from "react-router";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ITableField, IVersionData } from "types";

import "./Price.css";
import TableComponent from "@components/TableComponent";

type IPriceSection = {
	versions: IVersionData[];
	tableFields: ITableField[];
	accountMode?: boolean;
};

const PriceSection: React.FC<IPriceSection> = ({
	versions,
	tableFields,
	accountMode = false,
}) => {
	return (
		<section className="section" id="prices">
			{!accountMode && (
				<>
					<div className="section-title">Прайс и комплектация</div>
					<div className="text">
						Мы предлагаем возможность выбора{" "}
						<span>коробочной или облачной версии</span>.
					</div>
				</>
			)}

			<div className="cloud-version">
				<div
					className={
						accountMode
							? "version-title title-shift title-mob-disable"
							: "version-title title-shift"
					}
				>
					Облачная версия
				</div>
				<TableComponent tableFields={tableFields} versions={versions} />
			</div>

			{accountMode && (
				<Link
					to="/login"
					className="link link-align-start link-orange link-margin-top"
				>
					<div className="link-content">Купить лицензию</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</Link>
			)}

			<div className="box-version">
				<div className="version-title">Коробочная версия</div>
				<div className="text">
					Стоимость коробочной версии может варьироваться, поэтому просим вас
					оставить заявку на запрос цены, и наш менеджер свяжется с вами
					в ближайшее время.
				</div>
				<Link to="/login" className="link link-align-start">
					<div className="link-content">Запросить цену</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</Link>
			</div>
		</section>
	);
};

export default PriceSection;
