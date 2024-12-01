import React, { useState } from "react";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Typography,
	Menu,
	MenuItem,
} from "@mui/material";
import { Link } from "react-router";

import { ReactComponent as BurgerIcon } from "@assets/icons/burger-menu-icon.svg";
import { ReactComponent as MyIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as LogoIcon } from "@assets/icons/logo_kpi.svg";

import "./header.css";
// import myIconPath from "../assets/icons/icon1.svg";
// import myIconPath from "..assets/icon";

const pages = [
	{ name: "Главная", path: "/" },
	{ name: "О продукте", path: "/login" },
	{ name: "Кейсы", path: "/account" },
	{ name: "Прайс и комплектации", path: "/" },
	{ name: "Документация", path: "/login" },
	{ name: "Контакты", path: "/account" },
];

const Header: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	return (
		<header>
			<div className="header-container">
				{/* Иконка меню для мобильных */}
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleMenuOpen}
					>
						<BurgerIcon />
					</IconButton>

					{/* Мобильное меню */}
					<Menu
						anchorEl={anchorEl}
						open={isMenuOpen}
						onClose={handleMenuClose}
						slotProps={{
							paper: {
								style: {
									width: "200px",
								},
							},
						}}
					>
						{pages.map(page => (
							<MenuItem
								key={page.name}
								component={Link}
								to={page.path}
								onClick={handleMenuClose}
								style={{
									margin: "0px",
									fontFamily: "inherit",
									display: "block",
								}}
							>
								{page.name}
							</MenuItem>
						))}
					</Menu>
				</Box>
				{/* Горизонтальное меню для Desktop */}
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						gap: "12px",
						alignItems: "center",
					}}
				>
					<Typography
						key="logo"
						sx={{
							display: "block",
							color: "inherit",
							textDecoration: "none",
							margin: "0px",
						}}
					>
						<LogoIcon />
					</Typography>

					{pages.map(page => (
						<Typography
							key={page.name}
							component={Link}
							to={page.path}
							sx={{
								display: "flex",
								alignItems: "center",
								color: "inherit",
								fontFamily: "inherit",
								textDecoration: "none",
								margin: "0px",
								"&:hover": { textDecoration: "underline" },
							}}
						>
							{page.name}
						</Typography>
					))}
				</Box>
				<Link to="/login" className="link-to-login">
					<div className="link-content">Попробовать</div>
					<div className="link-content">
						<MyIcon />
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
