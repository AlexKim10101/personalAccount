import React, { useEffect } from "react";
import { Link } from "react-router";
import imgPath from "@assets/img/first-section-bg-image.png";
import CardGallery from "@components/Slider";

import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as AddressIcon } from "@assets/icons/address-icon.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone-icon.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail-icon.svg";

import { caseData, demoData, tableFields, versions } from "consts/data";
import AboutProductSection from "widgets/Sections/AboutProduct";
import CasesSection from "widgets/Sections/Cases";
import PriceSection from "widgets/Sections/Price";
import Header from "widgets/Header";
import Footer from "widgets/Footer";
import { useData } from "services/context";

function Home() {
	const { homePage } = useData();

	if (Object.keys(homePage).length === 0) {
		return null;
	}

	console.log("homePage", homePage);

	return (
		<>
			<Header />
			<div className="container">
				<main>
					<section className="section-home" id="home">
						<img className="background-image" src={imgPath} alt="section-bg" />
						<div className="background-container"></div>
						<div className="section-home-content">
							<div className="section-home-header">
								<span className="section-home-title">
									{homePage.main.title}
								</span>
								<span className="section-home-subtitle"> — </span>
								<span className="section-home-subtitle">
									{homePage.main.subtitle}
								</span>
							</div>
							<div className="section-home-description">
								<div className="section-description-title">
									{homePage.main.description.title}
								</div>
								<div className="section-description-content">
									{homePage.main.description.content}
								</div>
							</div>
						</div>
					</section>

					<section className="section-clients">
						<div className="text">{homePage.clients.description.content}</div>
						<CardGallery
							mobileSlidesToShow={homePage.clients.slider.mobileSlidesToShow}
							laptopSlidesToShow={homePage.clients.slider.laptopSlidesToShow}
							desctopSlidesToShow={homePage.clients.slider.desctopSlidesToShow}
						>
							{homePage.clients.slider.data.map((item: any, index: number) => (
								<div key={index} className="my-slide">
									<div className="card">
										<div className="card-title">{item.name}</div>
										<img src={item.path} alt={"logo" + item.name} />
									</div>
								</div>
							))}
						</CardGallery>
					</section>
					<AboutProductSection
						title={homePage.aboutProduct.title}
						features={homePage.aboutProduct.features}
						demo={homePage.aboutProduct.demo}
					/>
					<CasesSection data={homePage.cases} />
					<PriceSection
						versions={homePage.prices.versions}
						tableFields={homePage.prices.tableFields}
					/>
					<section className="section" id="documentation">
						<div className="section-title">{homePage.documentation.title}</div>
						<div className="text">
							{homePage.documentation.description.content}
						</div>
						<div className="link-container">
							<Link to="/login" className="link link-orange link-width">
								<div className="link-content">Презентация возможностей</div>
								<div className="link-content">
									<ArrowIcon />
								</div>
							</Link>
							<Link to="/login" className="link link-orange-mob link-width">
								<div className="link-content">Инструкция по установке ПО</div>
								<div className="link-content">
									<ArrowIcon />
								</div>
							</Link>
							<Link to="/login" className="link link-orange link-width">
								<div className="link-content">Руководство пользователя</div>
								<div className="link-content">
									<ArrowIcon />
								</div>
							</Link>
						</div>
					</section>

					<section className="section" id="contacts">
						<div className="info-wrapper">
							<div className="section-title title-width">
								{homePage.contacts.title}
							</div>
							<div className="text">
								{homePage.contacts.description.content}
							</div>
							<div className="info-container">
								<div className="info-part">
									<ul className="info-list">
										<li className="info-list-item">
											<div className="icon-wrap">
												<AddressIcon />
											</div>
											<div className="info-item-content">
												{homePage.contacts.description.address}
											</div>
										</li>
										<li className="info-list-item">
											<div className="icon-wrap">
												<PhoneIcon />
											</div>
											<div className="info-item-content">
												{homePage.contacts.description.phoneNumbers.map(
													(item: string, index: number) => (
														<div key={"phone" + index}>{item}</div>
													)
												)}
											</div>
										</li>
										<li className="info-list-item">
											<div className="icon-wrap">
												<MailIcon />
											</div>
											<div className="info-item-content">
												{homePage.contacts.description.eMail}
											</div>
										</li>
									</ul>
								</div>
								<div className="divider-adaptive"></div>
								<div className="info-part">
									<div className="info-text">
										{homePage.contacts.description.info}
									</div>
									{homePage.contacts.links.map((link: any) => (
										<Link
											key={link.id}
											to={link.to}
											className="link link-orange link-flex-end"
										>
											<div className="link-content">{link.title}</div>
											<div className="link-content">
												<ArrowIcon />
											</div>
										</Link>
									))}
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default Home;
// Стоимость
// Количество анкет
// Количество администраторов
// Количество собранных ответов
// Количество ссылок на заполнение
