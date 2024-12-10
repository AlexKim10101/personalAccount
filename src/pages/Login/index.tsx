import React, { useState } from "react";
import Form from "@components/Form";
import { ReactComponent as LogoIcon } from "@assets/icons/logo_kpi.svg";
import imgPath from "@assets/img/login-bg-image.jpg";
import "./login.css";
import CustomTabs from "@components/Tabs";

function LoginPage() {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<div className="login-container">
			<div className="section-form">
				<div className="form-container">
					<div className="logo-circle">
						<LogoIcon />
					</div>
					<CustomTabs
						activeTab={activeTab}
						setActiveTab={(i: number) => setActiveTab(i)}
						tabs={["Вход", "Регистрация"]}
					/>
					<Form enableNameField={activeTab === 1} />
				</div>
			</div>
			<div className="section-image">
				<img src={imgPath} alt="manager" />
			</div>
		</div>
	);
}

export default LoginPage;
