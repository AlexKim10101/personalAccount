import React, { useState } from "react";
import { Link } from "react-router";
import { useData } from "services/context";

import CustomTabs from "@components/Tabs";
import { Form } from "@components/Form";
import Icons from "@components/Icon";

import imgPath from "@assets/img/login-bg-image.jpg";
import { transformValidationRules } from "utils/parserValidationRule";
import "./login.css";
import { ISubmitBtnText } from "types";

const LoginPage = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const actions: ISubmitBtnText[] = ["Войти", "Зарегистрироваться"];
	const { loadingPage, logo } = useData();
	const { validationRules } = loadingPage;
	const rules = transformValidationRules(validationRules);

	return (
		<div className="login-container">
			<div className="section-form">
				<div className="form-container">
					<div className="logo-circle">
						<Link to={logo.to}>
							<Icons path={logo.url} id="logo" size={40} />
						</Link>
					</div>
					<CustomTabs
						activeTab={activeTab}
						setActiveTab={(i: number) => setActiveTab(i)}
						tabs={["Вход", "Регистрация"]}
					/>
					<Form
						submitBtnText={actions[activeTab]}
						enableNameField={activeTab === 1}
						closeModal={() => console.log("closeModal")}
						onSave={data => console.log("onSave", data)}
						rules={rules}
					/>
				</div>
			</div>
			<div className="section-image">
				<img src={imgPath} alt="manager" />
			</div>
		</div>
	);
};

export default LoginPage;
