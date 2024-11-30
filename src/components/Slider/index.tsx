import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	Box,
	Button,
	Card,
	CardContent,
	Typography,
	IconButton,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as ErLogo } from "@assets/icons/er-logo.svg";
import { ReactComponent as GorenjeLogo } from "@assets/icons/gorenje-logo.svg";
import { ReactComponent as MeiLogo } from "@assets/icons/mei-logo.svg";
import { ReactComponent as MosoblLogo } from "@assets/icons/mosobl-logo.svg";
import { ReactComponent as PgcLogo } from "@assets/icons/pgc-logo.svg";
import { ReactComponent as RaffLogo } from "@assets/icons/raff-logo.svg";

import { companies } from "./const";

import "./slider.css";

const logos = [ErLogo, GorenjeLogo, MeiLogo, MosoblLogo, PgcLogo, RaffLogo];

const CardGallery = () => {
	const sliderRef = useRef<Slider | null>(null);

	const next = () => {
		sliderRef.current?.slickNext();
	};

	const previous = () => {
		sliderRef.current?.slickPrev();
	};

	const settings: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<div className="slider-container">
			<Slider ref={sliderRef} {...settings}>
				{companies.map((item, index) => {
					const IconComponent = logos[index];

					return (
						<div key={index} className="slide">
							<div className="card">
								{item.name}

								<IconComponent />
							</div>
						</div>
					);
				})}
			</Slider>
			<div style={{ textAlign: "center" }}>
				<button className="button" onClick={previous}>
					Previous
				</button>
				<button className="button" onClick={next}>
					Next
				</button>
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
