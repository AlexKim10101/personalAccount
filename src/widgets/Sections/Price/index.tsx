import React from "react";
import { Link } from "react-router";
import TableComponent from "@components/TableComponent";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";
import "./Price.css";
import { ITableField, IСonditionsData, IVersionData } from "types";

type IPriceSection = {
	id: string;
	title: string;
	description: { content: string };
	versions: IVersionData[];
	conditions: IСonditionsData[];
	tableFields: ITableField[];
	accountMode?: boolean;
};

const PriceSection: React.FC<IPriceSection> = ({
	id,
	title,
	description,
	versions,
	conditions,
	tableFields,
	accountMode = false,
}) => {
	return (
		<section className="section" id={id}>
			{!accountMode && (
				<>
					<div className="section-title">{title}</div>
					<div className="text">
						<p dangerouslySetInnerHTML={{ __html: description.content }} />
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
					{versions[0].title}
				</div>
				<TableComponent tableFields={tableFields} conditions={conditions} />
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
				<div className="version-title">{versions[1].title}</div>
				<div className="text">{versions[1].description}</div>
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
