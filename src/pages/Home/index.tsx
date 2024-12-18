import React from "react";
import { Link } from "react-router";
import { useData } from "services/context";

import AboutProductSection from "widgets/Sections/AboutProduct";
import CasesSection from "widgets/Sections/Cases";
import PriceSection from "widgets/Sections/Price";
import Header from "widgets/Header";
import Footer from "widgets/Footer";
import CardGallery from "@components/Slider";

import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";
import { ReactComponent as AddressIcon } from "@assets/icons/address-icon.svg";
import { ReactComponent as PhoneIcon } from "@assets/icons/phone-icon.svg";
import { ReactComponent as MailIcon } from "@assets/icons/mail-icon.svg";

function Home() {
	const { homePage, logo } = useData();

	if (!homePage) return null;

	const {
		header,
		footer,
		sections: {
			main,
			clients,
			aboutProduct,
			cases,
			prices,
			documentation,
			contacts,
		},
	} = homePage;

	return (
		<>
			<Header logo={logo} navigation={header.navigation} />
			<div className="container">
				<main>
					<section className="section-home" id="home">
						<img
							className="background-image"
							src={main.bgImgPath}
							alt="section-bg"
						/>
						<div className="background-container"></div>
						<div className="section-home-content">
							<div className="section-home-header">
								<span className="section-home-title">{main.title}</span>
								<span className="section-home-subtitle"> — </span>
								<span className="section-home-subtitle">{main.subtitle}</span>
							</div>
							<div className="section-home-description">
								<div className="section-description-title">
									{main.description.title}
								</div>
								<div className="section-description-content">
									{main.description.content}
								</div>
							</div>
						</div>
					</section>

					<section className="section-clients">
						<div className="text">{clients.description.content}</div>
						<CardGallery
							mobileSlidesToShow={clients.slider.mobileSlidesToShow}
							laptopSlidesToShow={clients.slider.laptopSlidesToShow}
							desctopSlidesToShow={clients.slider.desctopSlidesToShow}
						>
							{clients.slider.data.map((item: any, index: number) => (
								<div key={index} className="my-slide">
									<div className="card">
										<div className="card-title">{item.title}</div>
										<img src={item.path} alt={"logo" + item.title} />
									</div>
								</div>
							))}
						</CardGallery>
					</section>
					<AboutProductSection
						title={aboutProduct.title}
						features={aboutProduct.features}
						demo={aboutProduct.demo}
					/>
					<CasesSection data={cases.data} />
					<PriceSection {...prices} />
					<section className="section" id="documentation">
						<div className="section-title">{documentation.title}</div>
						<div className="text">{documentation.description.content}</div>
						<div className="link-container">
							{documentation.links.map((link: any) => (
								<Link
									key={link.id}
									to={link.to}
									className="link link-orange-mob link-width"
								>
									<div className="link-content">{link.title}</div>
									<div className="link-content">
										<ArrowIcon />
									</div>
								</Link>
							))}
						</div>
					</section>

					<section className="section" id="contacts">
						<div className="info-wrapper">
							<div className="section-title title-width">{contacts.title}</div>
							<div className="text">{contacts.description.content}</div>
							<div className="info-container">
								<div className="info-part">
									<ul className="info-list">
										<li className="info-list-item">
											<div className="icon-wrap">
												<AddressIcon />
											</div>
											<div className="info-item-content">
												{contacts.description.address}
											</div>
										</li>
										<li className="info-list-item">
											<div className="icon-wrap">
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
											<div className="icon-wrap">
												<MailIcon />
											</div>
											<div className="info-item-content">
												{contacts.description.eMail}
											</div>
										</li>
									</ul>
								</div>
								<div className="divider-adaptive"></div>
								<div className="info-part">
									<div className="info-text">{contacts.description.info}</div>
									{contacts.links.map((link: any) => (
										<Link
											key={link.id}
											to={link.to}
											className="link link-orange link-flex-start"
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
			<Footer logo={logo} navigation={footer.navigation} />
		</>
	);
}

export default Home;
