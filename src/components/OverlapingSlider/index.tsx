import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css";

function CenterMode() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		speed: 500,
	};
	return (
		<div className="overlapping-slider">
			<Slider {...settings}>
				<div className="my-super-slide">
					<h3>1</h3>
				</div>
				<div className="my-super-slide">
					<h3>2</h3>
				</div>
				<div className="my-super-slide">
					<h3>3</h3>
				</div>
				<div className="my-super-slide">
					<h3>4</h3>
				</div>
				<div className="my-super-slide">
					<h3>5</h3>
				</div>
				<div className="my-super-slide">
					<h3>6</h3>
				</div>
			</Slider>
		</div>
	);
}

export default CenterMode;
