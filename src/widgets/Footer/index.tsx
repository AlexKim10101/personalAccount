import React from "react";
import { Link } from "react-router";

import { Typography } from "@mui/material";
import Icons from "@components/Icon";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";
import { ReactComponent as AddressIcon } from "@assets/icons/address-icon.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone-icon.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail-icon.svg";
import "./footer.css";
import { INavItem } from "types";
import { PrimaryLink } from "@components/CustomLink";

type IFooterProps = {
	logo: {
		url: string;
		to: string;
	};
	navigation: INavItem[];
	contacts: any;
	content: string;
};

const Footer: React.FC<IFooterProps> = ({
	logo,
	navigation,
	contacts,
	content,
}) => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-left-section">
					<div className="footer-nav">
						<Link to={logo.to}>
							<Typography
								key="logo"
								sx={{
									display: "block",
									color: "inherit",
									textDecoration: "none",
									margin: "0px",
								}}
							>
								<Icons path={logo.url} id="logo" size={40} />
							</Typography>
						</Link>
						{navigation.map(item => (
							<Typography
								key={item.title}
								component={Link}
								to={`#${item.path}`}
								sx={{
									display: "flex",
									alignItems: "center",
									color: "inherit",
									fontFamily: "inherit",
									textDecoration: "none",
									margin: "0px",
									"&:hover": { textDecoration: "underline" },
								}}
							>
								{item.title}
							</Typography>
						))}
					</div>

					<PrimaryLink to="/login" className="link-orange footer-link">
						<div className="link-content">Попробовать</div>
						<div className="link-content">
							<ArrowIcon />
						</div>
					</PrimaryLink>

					<div className="footer-header">
						<Typography
							key="logo"
							sx={{
								display: "block",
								color: "inherit",
								textDecoration: "none",
								margin: "0px",
							}}
						>
							<Icons path={logo.url} id="logo" size={40} />
						</Typography>
						KPI MONITOR Анкетирование
					</div>

					<div className="footer-text">{content}</div>
				</div>

				<div className="footer-left-right">
					<div className="footer-info-container">
						<div className="">
							<ul className="info-list">
								<li className="info-list-item">
									<div className="footer-icon-wrap">
										<AddressIcon />
									</div>
									<div className="info-item-content">
										{contacts.description.address}
									</div>
								</li>
								<li className="info-list-item">
									<div className="footer-icon-wrap">
										<PhoneIcon />
									</div>
									<div className="info-item-content">
										{contacts.description.phoneNumbers.map(
											(item: string, index: number) => (
												<div key={"phone" + index}>{item}</div>
											)
										)}
									</div>
								</li>
								<li className="info-list-item">
									<div className="footer-icon-wrap">
										<MailIcon />
									</div>
									<div className="info-item-content">
										{contacts.description.eMail}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
