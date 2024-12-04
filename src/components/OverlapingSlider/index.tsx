import React, { Component, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";

type IDemoSlider = {
	children: any;
	handleActive: (count: number) => void;
};
// forwardRef<Slider, OverlappingSliderProps>((_, ref)
const DemoSlider = forwardRef<Slider, IDemoSlider>(
	({ children, handleActive }, ref) => {
		const settings = {
			infinite: true,
			slidesToShow: 1,
			speed: 500,
			arrows: false,
			// autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true,
			// beforeChange: (current, next) => {
			// 	setOldSlide(current);
			// 	setActiveSlide(next);
			// },
			afterChange: (current: number) => handleActive(current),
		};
		return (
			<div className="overlapping-slider">
				<Slider ref={ref} {...settings}>
					{children}
				</Slider>
			</div>
		);
	}
);

export default DemoSlider;
