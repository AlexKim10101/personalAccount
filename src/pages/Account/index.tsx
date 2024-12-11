import React from "react";
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
import PriceSection from "widgets/Sections/Price";

function AccountPage() {
	const location = useLocation();

	const getActiveTabIndex = () => {
		if (location.pathname.endsWith("/domens")) return 1;
		if (location.pathname.endsWith("/users")) return 2;
		return 0;
	};

	return (
		<div className="container account-container">
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
				<Tabs value={getActiveTabIndex()} className="links-container">
					{accountLinksData.map(item => (
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
						<Route
							path="license"
							element={
								<PriceSection
									tableFields={tableFields}
									versions={versions}
									accountMode
								/>
							}
						/>
						<Route path="domens" element={<EditableList items={domens} />} />
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
