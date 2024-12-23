import React from "react";
import { Link as RouterLink } from "react-router";
import classNames from "classnames";
import "./link.css";

interface LinkOptions {
	variant?: "contained" | "outlined" | "text";
	component?: React.ElementType;
}

interface LinkProps {
	to: string;
	className?: string;
	children: React.ReactNode;
}

const CustomLink =
	(options: LinkOptions) =>
	({ ...props }: LinkProps) => {
		const btnClass = classNames(
			{
				link_primary: true,
			},
			props.className
		);

		return (
			<RouterLink {...props} className={btnClass}>
				{props.children}
			</RouterLink>
		);
	};

export const PrimaryLink = CustomLink({});
