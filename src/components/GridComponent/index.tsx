import React from "react";
import { Typography } from "@mui/material";
import Icon from "@components/Icon";
import "./gridComponent.css";
import { IAboutProductItem } from "../../types";

type IGridComponent = {
	data: IAboutProductItem[];
};

const GridComponent: React.FC<IGridComponent> = ({ data }) => {
	return (
		<div className="grid">
			{data.map((item, index) => (
				<div className="grid-item" key={"productGridItem" + index}>
					<div className="grid-item-header">
						<div className="icon-wrapper">
							<Icon path={item.path} id={"icon" + index} />
						</div>
						<div className="grid-item-title">{item.title}</div>
					</div>

					<div className="item-content">
						{item.content.length === 1 ? (
							<Typography>{item.content[0]}</Typography>
						) : (
							<ul className="grid-content-list">
								{item.content.map((itemContent, index) => (
									<li key={"gridContentItem" + index}>{itemContent}</li>
								))}
							</ul>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default GridComponent;
