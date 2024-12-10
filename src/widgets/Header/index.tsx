import React, { useState, useEffect } from "react";
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
import { ReactComponent as ArrowIcon } from "@assets/icons/icon1.svg";
import { ReactComponent as LogoIcon } from "@assets/icons/logo_kpi.svg";
import { anchorData, KPI_MONITOR_URL, SCROLL_LIMIT } from "consts/data";
import "./header.css";

const Header: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [hidden, setHidden] = useState(false);
	const isMenuOpen = Boolean(anchorEl);

	const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollLimit = SCROLL_LIMIT;
			setHidden(window.scrollY > scrollLimit);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={hidden ? "hidden" : ""}>
			<div className="header-container">
				{/* Иконка меню для мобильных */}
				<div className="block-mob">
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
						{anchorData.map(data => (
							<MenuItem
								key={data.name}
								component={Link}
								to={data.path}
								onClick={handleMenuClose}
								style={{
									margin: "0px",
									display: "block",
									fontFamily: "Manrope",
								}}
							>
								{data.name}
							</MenuItem>
						))}
					</Menu>
				</div>

				{/* Горизонтальное меню для Desktop */}
				<div className="block-desk">
					<Link to={KPI_MONITOR_URL}>
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
					</Link>
					{anchorData.map(data => (
						<Typography
							key={data.name}
							component={Link}
							to={data.path}
							sx={{
								display: "flex",
								alignItems: "center",
								color: "inherit",
								fontFamily: "Manrope",
								textDecoration: "none",
								margin: "0px",
								"&:hover": { textDecoration: "underline" },
							}}
						>
							{data.name}
						</Typography>
					))}
				</div>

				<Link to="/login" className="link">
					<div className="link-content">Попробовать</div>
					<div className="link-content">
						<ArrowIcon />
					</div>
				</Link>
			</div>
		</header>
	);
};

export default Header;
