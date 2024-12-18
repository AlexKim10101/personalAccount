import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import GridComponent from "@components/GridComponent";
import CardGallery from "@components/Slider";
import DemoSlider from "@components/OverlapingSlider";
import Icon from "@components/Icon";

import { ReactComponent as ForwardIcon } from "@assets/icons/forward-icon.svg";
import { ReactComponent as BackIcon } from "@assets/icons/back-icon.svg";

import { IAboutProductItem } from "types";

type IAboutProductSection = {
	title: string;
	features: {
		slider: {
			data: IAboutProductItem[];
			mobileSlidesToShow: number;
			laptopSlidesToShow: number;
			desctopSlidesToShow: number;
		};
	};
	demo: {
		slider: {
			data: IAboutProductItem[];
			mobileSlidesToShow: number;
			laptopSlidesToShow: number;
			desctopSlidesToShow: number;
		};
	};
};

const AboutProductSection: React.FC<IAboutProductSection> = ({
	features: { slider: featureSlider },
	demo: { slider: demoSlider },
	title,
}) => {
	const sliderRef = useRef<Slider | null>(null);

	const [activeSlide, setActiveSlide] = useState(0);

	const handleNext = () => {
		sliderRef.current?.slickNext();
	};

	const handlePrev = () => {
		sliderRef.current?.slickPrev();
	};

	const nextSlideIndex =
		activeSlide === demoSlider.data.length - 1 ? 0 : activeSlide + 1;

	return (
		<section className="section-about-product" id="about-product">
			<div className="subsection-grid">
				<div className="section-about-product-title">{title}</div>
				<div className="desctop-version">
					<GridComponent data={featureSlider.data} />
				</div>
				<div className="mobile-version">
					<CardGallery
						mobileSlidesToShow={featureSlider.mobileSlidesToShow}
						laptopSlidesToShow={featureSlider.laptopSlidesToShow}
						desctopSlidesToShow={featureSlider.desctopSlidesToShow}
					>
						{featureSlider.data.map((item, index) => {
							return (
								<div key={"galleryProductItem" + index}>
									<div className="product-item">
										<div className="product-item-header">
											<div className="product-icon-wrapper">
												<Icon path={item.path} id={"icon" + index} />
											</div>
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
						<div className="demo-title">
							{demoSlider.data[activeSlide].title}
						</div>
						<div className="btn-wrapper">
							<IconButton onClick={handleNext} className="icon-button">
								<ForwardIcon />
							</IconButton>
						</div>
					</div>
					<div className="demo-content">
						{demoSlider.data[activeSlide].content[0]}
					</div>
				</div>
				<div className="slider-wrapper">
					<DemoSlider
						ref={sliderRef}
						fade={true}
						handleActive={(count: number) => setActiveSlide(count)}
						className="shadow-slider"
						desctopSlidesToShow={1}
					>
						{demoSlider.data.map((item, index) => (
							<div key={"slidde" + index} className="demo-slide-item">
								<img src={item.path} alt={"slide" + item.title} />
							</div>
						))}
					</DemoSlider>
					<div className="switcher">
						<IconButton onClick={handlePrev} className="icon-button">
							<BackIcon />
						</IconButton>
						<span className="switcher-counter">
							{activeSlide + 1}/{demoSlider.data.length}
						</span>
						<IconButton onClick={handleNext} className="icon-button">
							<ForwardIcon />
						</IconButton>
					</div>
				</div>

				<div className="next-slide-img-btn" onClick={handleNext}>
					<img src={demoSlider.data[nextSlideIndex].path} alt="next-slide" />
				</div>
			</div>
		</section>
	);
};

export default AboutProductSection;
