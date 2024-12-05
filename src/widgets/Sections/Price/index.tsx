import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ITableField, IVersionData } from "types";

import "./Price.css";

type ICasesSection = {
	versions: IVersionData[];
	tableFields: ITableField[];
};

const PriceSection: React.FC<ICasesSection> = ({ versions, tableFields }) => {
	const [currentVersion, setCurrentVersion] = useState(versions[0]);
	const filteredVersions = [currentVersion];

	return (
		<section className="section">
			<div className="section-title">Прайс и комплектация</div>
			<div className="text">
				Мы предлагаем возможность выбора{" "}
				<span>коробочной или облачной версии</span>.
			</div>

			<div className="cloud-version">
				<div className="version-title title-shift">Облачная версия</div>
				<div className="version-control">
					{versions.map((v, index) => (
						<>
							<div key={"version" + v.id} className="version-item-wrapper">
								{v.title}
								<div
									className={
										currentVersion.id === v.id
											? "version-item version-item-selected"
											: "version-item"
									}
									onClick={() => setCurrentVersion(versions[index])}
								>
									{v.title}
								</div>
							</div>

							{index === versions.length - 1 ? null : (
								<div className="divider"></div>
							)}
						</>
					))}
				</div>
				<table className="table-mob">
					<tbody>
						{tableFields.map(field => (
							<tr key={field.id}>
								<td key={"f_c" + field.id}>{field.title}</td>
								{filteredVersions.map(v => (
									<td key={field.id + v.id}>{v.data[field.id]}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>

				<table className="table-desk">
					<thead>
						<tr>
							<th className="th" key="empty_field"></th>
							{versions.map(v => (
								<th className="th" key={v.id}>
									{v.title}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableFields.map(field => (
							<tr key={field.id}>
								<td key={"f_c" + field.id}>{field.title}</td>
								{versions.map(v => (
									<td key={field.id + v.id}>{v.data[field.id]}</td>
								))}
							</tr>
						))}
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
				<Link to="/login" className="link-to-login link-align-start">
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
