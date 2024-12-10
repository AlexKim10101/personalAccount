import React, { useState } from "react";
import { ReactComponent as EditIcon } from "@assets/icons/svg/editIcon.svg";
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as ExitOneIcon } from "@assets/icons/svg/exit_1.svg";
import { ReactComponent as ExitTwoIcon } from "@assets/icons/svg/exit_2.svg";

import "./account.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Link } from "react-router";

function AccountPage() {
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
		</div>
	);
}

export default AccountPage;
