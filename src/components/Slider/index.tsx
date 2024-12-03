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
};

const CardGallery: React.FC<ICardGallery> = ({
	children,
	mobileSlidesToShow,
	laptopSlidesToShow,
	desctopSlidesToShow,
}) => {
	const sliderRef = useRef<Slider | null>(null);

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
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: laptopSlidesToShow,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: mobileSlidesToShow,
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

// let sliderRef = useRef<any>(null);
// const next = () => {
// 	// sliderRef.slickNext();
// };
// const previous = () => {
// 	// sliderRef.slickPrev();
// };
// const settings = {
// 	dots: true,
// 	infinite: true,
// 	speed: 500,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// };
// return (
// 	<div className="slider-container">
// 		<Slider
// 			ref={slider => {
// 				// sliderRef= slider;
// 			}}
// 			{...settings}
// 		>
// 			<div key={1}>
// 				<h3>1</h3>
// 			</div>
// 			<div key={2}>
// 				<h3>2</h3>
// 			</div>
// 			<div key={3}>
// 				<h3>3</h3>
// 			</div>
// 			<div key={4}>
// 				<h3>4</h3>
// 			</div>
// 			<div key={5}>
// 				<h3>5</h3>
// 			</div>
// 			<div key={6}>
// 				<h3>6</h3>
// 			</div>
// 		</Slider>
// 		<div style={{ textAlign: "center" }}>
// 			<button className="button" onClick={previous}>
// 				Previous
// 			</button>
// 			<button className="button" onClick={next}>
// 				Next
// 			</button>
// 		</div>
// 	</div>
// );

////////////
