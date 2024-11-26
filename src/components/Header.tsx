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

import { ReactComponent as MyIcon } from "../assets/icons/icon1.svg";
// import myIconPath from "..assets/icon";

const pages = [
	{ name: "Home", path: "/" },
	{ name: "Login", path: "/login" },
	{ name: "Account", path: "/account" },
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
		<AppBar position="static">
			<Toolbar>
				{/* Логотип */}

				{/* Иконка меню для мобильных */}
				<Box sx={{ display: { xs: "flex", md: "none" } }}>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleMenuOpen}
					>
						<MyIcon />
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
							>
								{page.name}
							</MenuItem>
						))}
					</Menu>
				</Box>

				{/* Горизонтальное меню для Desktop */}
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					{pages.map(page => (
						<Typography
							key={page.name}
							component={Link}
							to={page.path}
							sx={{
								color: "inherit",
								textDecoration: "none",
								margin: "0 10px",
								"&:hover": { textDecoration: "underline" },
							}}
						>
							{page.name}
						</Typography>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
