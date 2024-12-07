import React from "react";
import Form from "@components/Form";
import { ReactComponent as LogoIcon } from "@assets/icons/logo_kpi.svg";
import imgPath from "@assets/img/login-bg-image.jpg";
import "./login.css";

function Account() {
	return (
		<div className="login-container">
			<div className="section-form">
				<div className="form-container">
					<div className="logo-circle">
						<LogoIcon />
					</div>
					<Form />
				</div>
			</div>
			<div className="section-image">
				<img src={imgPath} alt="manager" />
			</div>
		</div>
	);
}

export default Account;
