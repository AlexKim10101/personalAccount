import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import { ReactComponent as ForwardIcon } from "@assets/icons/forward-icon.svg";
import { ReactComponent as BackIcon } from "@assets/icons/back-icon.svg";
import GridComponent from "@components/GridComponent";
import CardGallery from "@components/Slider";
import DemoSlider from "@components/OverlapingSlider";
import { ICaseDataItem } from "types";
import "./cases.css";

type ICasesSection = {
	data: ICaseDataItem[];
};

const CasesSection: React.FC<ICasesSection> = ({ data }) => {
	const sliderRef = useRef<Slider | null>(null);
	const [activeCaseIndex, setAtiveCaseIndex] = useState<number>(0);
	const [activeSlide, setActiveSlide] = useState(0);

	const handleNext = () => {
		sliderRef.current?.slickNext();
	};

	const handlePrev = () => {
		sliderRef.current?.slickPrev();
	};

	const dropSlideValue = () => {
		sliderRef.current?.slickGoTo(0, false);
	};

	const activeCase = data[activeCaseIndex];

	return (
		<section className="section" id="cases">
			<div className="section-title">Кейсы</div>
			<div className="tabs ">
				{data.map((item, index) => {
					return (
						<div
							key={"tab" + index}
							className={activeCaseIndex === index ? "tab tab-active" : "tab"}
							onClick={() => {
								setActiveSlide(0);
								setAtiveCaseIndex(index);
								dropSlideValue();
							}}
						>
							{item.caption}
						</div>
					);
				})}
			</div>
			<div className="description">
				<div className="description-title">{activeCase.description.title}</div>
				<div className="description-content">
					{activeCase.description.content}
				</div>
			</div>
			<div className="statistics">
				{activeCase.statisticPoints.map((item, index) => {
					return (
						<div key={"statistic-point" + index} className="statistic-point">
							<div className="stat-point-title">{item.title}</div>
							<div className="stat-point-content">{item.content}</div>
						</div>
					);
				})}
			</div>
			<div className="functions">
				<div className="functions-title">{activeCase.functionPoints.title}</div>
				<div className="functions-content">
					<ol className="function-point-list">
						{activeCase.functionPoints.content.map((item, index) => {
							return (
								<li
									key={"function-point-list-item" + index}
									className="function-point-list-item"
								>
									<div className="list-counter">{index + 1}</div>
									<div className="list-item-text">{item}</div>
								</li>
							);
						})}
					</ol>
				</div>
				<div className="case-slider-wrapper">
					<DemoSlider
						ref={sliderRef}
						handleActive={(count: number) => setActiveSlide(count)}
					>
						{activeCase.slides.map((item, index) => (
							<div key={"slide" + index} className="demo-slide-item">
								<img src={item} alt={"slide" + index} />
							</div>
						))}
					</DemoSlider>
					<div className="switcher">
						<IconButton onClick={handlePrev} className="icon-button">
							<BackIcon />
						</IconButton>
						<span className="switcher-counter">
							{activeSlide + 1}/{activeCase.slides.length}
						</span>
						<IconButton onClick={handleNext} className="icon-button">
							<ForwardIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CasesSection;
