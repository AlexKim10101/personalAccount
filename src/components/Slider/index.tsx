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
import { ReactComponent as ForwardIcon } from "@assets/icons/forward-icon.svg";
import { ReactComponent as BackIcon } from "@assets/icons/back-icon.svg";
import erLogo from "@assets/icons/er-logo.png";
import gorLogo from "@assets/icons/gorenje-logo.png";
import meiLogo from "@assets/icons/mei-logo.png";
import mosoblLogo from "@assets/icons/mosobl-logo.png";
import pgcLogo from "@assets/icons/pgc-logo.png";
import raffLogo from "@assets/icons/raff-logo.png";

import { companies } from "./const";

import "./slider.css";

// const logos = [ErLogo, GorenjeLogo, MeiLogo, MosoblLogo, PgcLogo, RaffLogo];
const imgPaths = [erLogo, gorLogo, meiLogo, mosoblLogo, pgcLogo, raffLogo];

const CardGallery = () => {
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
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<div className="slider-container">
			<Slider ref={sliderRef} {...settings}>
				{companies.map((item, index) => {
					const imgPath = imgPaths[index];
					return (
						<div key={index} className="slide">
							<div className="card">
								<div className="card-title">{item.name}</div>
								<img src={imgPath} alt={"logo" + item.name} />
							</div>
						</div>
					);
				})}
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
