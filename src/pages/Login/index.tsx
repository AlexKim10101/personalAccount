import React, { useState } from "react";
import { Link } from "react-router";
import { useData } from "services/context";

import CustomTabs from "@components/Tabs";
import { Form } from "@components/Form";
import Icons from "@components/Icon";

import "./login.css";

const LoginPage = () => {
	const [activeTab, setActiveTab] = useState<number>(0);
	const { loadingPage, logo } = useData();
	const { sections, bgImgUrl } = loadingPage;
	const activeSection = sections[activeTab];
	const tabs = sections.map((s: any) => s.title);

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
						tabs={tabs}
					/>
					<Form
						submitBtnText={activeSection.titleBtn}
						closeModal={() => console.log("closeModal")}
						onSave={data => console.log("onSave", data)}
						formFields={activeSection.formFields}
					/>
				</div>
			</div>
			<div className="section-image">
				<img src={bgImgUrl} alt="manager" />
			</div>
		</div>
	);
};

export default LoginPage;
