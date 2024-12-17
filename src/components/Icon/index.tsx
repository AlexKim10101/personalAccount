import React from "react";

interface IconsProps {
	id: string;
	path: string;
	size?: number;
}

const Icons: React.FC<IconsProps> = ({ id, path, size = 24 }) => {
	return (
		<img
			src={`${path}`}
			alt={`icon-${id}`}
			width={size}
			height={size}
			style={{ display: "block" }}
		/>
	);
};

export default Icons;
