import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import { ReactComponent as ForwardIcon } from "@assets/icons/forward-icon.svg";
import { ReactComponent as BackIcon } from "@assets/icons/back-icon.svg";

import "./slider.css";

type ICardGallery = {
	children: any;
	mobileSlidesToShow: number;
	laptopSlidesToShow: number;
	desctopSlidesToShow: number;
	className?: string;
};

const CardGallery: React.FC<ICardGallery> = ({
	children,
	mobileSlidesToShow,
	laptopSlidesToShow,
	desctopSlidesToShow,
	className,
}) => {
	const sliderRef = useRef<Slider | null>(null);

	const containerClassName = `slider-container ${className}`;

	const next = () => {
		sliderRef.current?.slickNext();
	};

	const prev = () => {
		sliderRef.current?.slickPrev();
	};

	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: desctopSlidesToShow,
		focusOnSelect: false,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: laptopSlidesToShow,
					focusOnSelect: true,
					autoplay: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: mobileSlidesToShow,
					focusOnSelect: true,
					autoplay: false,
				},
			},
		],
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
	};

	return (
		<div className="slider-container">
			<Slider ref={sliderRef} {...settings}>
				{children}
			</Slider>
			<div className="button-container">
				<IconButton onClick={prev} className="icon-button">
					<BackIcon />
				</IconButton>
				<IconButton onClick={next} className="icon-button">
					<ForwardIcon />
				</IconButton>
			</div>
		</div>
	);
};

export default CardGallery;
