import React, { useState } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router";
import { ReactComponent as EditIcon } from "@assets/icons/svg/editIcon.svg";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as ExitOneIcon } from "@assets/icons/svg/exit_1.svg";
import { ReactComponent as ExitTwoIcon } from "@assets/icons/svg/exit_2.svg";

import "./account.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Tab, Tabs } from "@mui/material";
import {
	accountLinksData,
	tableFields,
	versions,
	domens,
	users,
} from "consts/data";
import EditableList from "widgets/Sections/Domens";
import UsersSection from "widgets/Sections/Users";

const LicenseSection = () => {
	const [currentVersion, setCurrentVersion] = useState(versions[0]);
	const filteredVersions = [currentVersion];

	return (
		<div className="license-container">
			<div className="cloud-version">
				<div className="version-title title-shift">Облачная версия</div>
				<div className="version-control">
					{versions.map((v, index) => (
						<React.Fragment key={"version" + v.id}>
							<div className="version-item-wrapper">
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
						</React.Fragment>
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

				<Link
					to="/login"
					className="link link-align-start link-orange link-margin-top"
				>
					<div className="link-content">Купить лицензию</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</Link>
			</div>
			<div className="box-version ">
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
		</div>
	);
};

const DomensSection = () => {
	return <EditableList items={domens} />;
};

function AccountPage() {
	const location = useLocation();
	// TODO: вынести URL в коллекцию
	const getActiveTabIndex = () => {
		if (location.pathname.endsWith("/domens")) return 1;
		if (location.pathname.endsWith("/users")) return 2;
		return 0;
	};

	const activeTabIndex = getActiveTabIndex();

	return (
		<div className="account-container">
			<div className="account-header">
				<div className="icon-btn-wrapper">
					<IconButton className="account-icon-btn">
						<EditIcon />
					</IconButton>
					<IconButton className="account-icon-btn">
						<Box sx={{ position: "relative", display: "inline-block" }}>
							<ExitOneIcon />
							<ExitTwoIcon
								style={{
									position: "absolute",
									top: "2px",
									left: 0,
									transform: "translateY(110%)",
								}}
							/>
						</Box>
					</IconButton>
				</div>
				<div className="user-info-container">
					<div className="user-name">Иванов Иван Иванович</div>

					<div className="user-email">ivan@ivanov.ru</div>

					<Link to="/login" className="link link-min-width">
						<div className="link-content">Перейти в конфигуратор</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>
				</div>

				<div className="user-license-container">
					<div className="license-title">Базовая лицензия:</div>
					<div className="license-value">8 дней</div>
					<Link to="/login" className="link link-orange link-min-width">
						<div className="link-content">Продлить лицензию</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</Link>
				</div>
			</div>

			<Box>
				<Tabs value={activeTabIndex} className="links-container">
					{accountLinksData.map((item, index) => (
						<Tab
							key={item.id}
							label={item.title}
							component={Link}
							to={item.url}
							className="links-with-divider"
							disableRipple
						/>
					))}
				</Tabs>

				<Box mt={2}>
					<Routes>
						<Route path="license" element={<LicenseSection />} />
						<Route path="domens" element={<DomensSection />} />
						<Route path="users" element={<UsersSection users={users} />} />
						<Route
							path="*"
							element={<Navigate to="/account/license" replace />}
						/>
					</Routes>
				</Box>
			</Box>
		</div>
	);
}

export default AccountPage;
