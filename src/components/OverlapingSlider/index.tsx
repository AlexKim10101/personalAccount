import React, { Component, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";

type IDemoSlider = {
	children: any;
	handleActive: (count: number) => void;
	className?: string;
	fade: boolean;
	mobileSlidesToShow?: number;
	laptopSlidesToShow?: number;
	desctopSlidesToShow?: number;
};

const DemoSlider = forwardRef<Slider, IDemoSlider>(
	(
		{
			children,
			handleActive,
			className,
			fade,
			desctopSlidesToShow = 1,
			laptopSlidesToShow = 1,
			mobileSlidesToShow = 1,
		},
		ref
	) => {
		const settings = {
			infinite: true,
			slidesToShow: desctopSlidesToShow,
			fade: fade,
			// speed: fade ? 0 : 500,
			arrows: false,
			autoplaySpeed: 3000,
			pauseOnHover: true,
			beforeChange: (_current: number, next: number) => handleActive(next),
		};

		const extraClassName = fade ? className : "";

		return (
			<div className={`overlapping-slider ${extraClassName}`}>
				<Slider ref={ref} {...settings}>
					{children}
				</Slider>
			</div>
		);
	}
);

export default DemoSlider;
