import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { ReactComponent as ForwardIcon } from "@assets/icons/forward-icon.svg";
import { ReactComponent as BackIcon } from "@assets/icons/back-icon.svg";
import GridComponent from "@components/GridComponent";
import CardGallery from "@components/Slider";

import { aboutProductData, companies } from "consts/data";
import DemoSlider from "@components/OverlapingSlider";
import { IDemoDataItem } from "types";

type IAboutProductSection = {
	data: IDemoDataItem[];
};

const AboutProductSection: React.FC<IAboutProductSection> = ({ data }) => {
	const sliderRef = useRef<Slider | null>(null);

	const [activeSlide, setActiveSlide] = useState(0);

	const handleNext = () => {
		sliderRef.current?.slickNext();
	};

	const handlePrev = () => {
		sliderRef.current?.slickPrev();
	};

	return (
		<>
			<section className="section-about-product">
				<div className="subsection-grid">
					<div className="section-about-product-title">О продукте</div>
					<div className="desctop-version">
						<GridComponent data={aboutProductData} />
					</div>
					<div className="mobile-version">
						<CardGallery
							mobileSlidesToShow={1}
							laptopSlidesToShow={3}
							desctopSlidesToShow={4}
						>
							{aboutProductData.map((item, index) => {
								return (
									<div key={"galleryProductItem" + index}>
										<div className="product-item">
											<div className="product-item-header">
												<div className="product-icon-wrapper">{item.logo}</div>
												{/* <img src={imgPath} /> */}
												<div className="product-item-title">{item.title}</div>
											</div>

											<div className="product-item-content">
												{item.content.length === 1 ? (
													<Typography>{item.content[0]}</Typography>
												) : (
													<ul className="product-list">
														{item.content.map((itemContent, index) => (
															<li
																className="product-list-item"
																key={"productItem" + index}
															>
																{itemContent}
															</li>
														))}
													</ul>
												)}
											</div>
										</div>
									</div>
								);
							})}
						</CardGallery>
					</div>
				</div>

				<div className="demo-slider-container">
					<div className="slide-description">
						<div className="demo-header">
							<div className="demo-title">{data[activeSlide].title}</div>
							<div className="btn-wrapper">
								<IconButton onClick={handleNext} className="icon-button">
									<ForwardIcon />
								</IconButton>
							</div>
						</div>
						<div className="demo-content">{data[activeSlide].content}</div>
					</div>
					<div className="slider-wrapper">
						<DemoSlider
							ref={sliderRef}
							handleActive={(count: number) => setActiveSlide(count)}
						>
							{data.map((item, index) => (
								<div key={"slide" + index} className="demo-slide-item">
									<img src={item.imgPath} alt={"slide" + item.title} />
								</div>
							))}
						</DemoSlider>
						<div className="switcher">
							<IconButton onClick={handlePrev} className="icon-button">
								<BackIcon />
							</IconButton>
							<span className="switcher-counter">
								{activeSlide + 1}/{data.length}
							</span>
							<IconButton onClick={handleNext} className="icon-button">
								<ForwardIcon />
							</IconButton>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutProductSection;
