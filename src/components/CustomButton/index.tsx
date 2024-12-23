import React, { ButtonHTMLAttributes } from "react";
import { Link as RouterLink } from "react-router";
import classNames from "classnames";
import "./button.css";

interface ButtonOptions {
	variant?: "contained" | "outlined" | "text";
	component?: React.ElementType;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

const CustomButton =
	(options: ButtonOptions) =>
	({ ...props }: ButtonProps) => {
		const btnClass = classNames(
			{
				btn: true,
			},
			props.className
		);

		return (
			<button {...props} className={btnClass}>
				{props.children}
			</button>
		);
	};

export const PrimaryButton = CustomButton({});
