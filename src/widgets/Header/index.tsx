import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { IconButton, Typography, Menu, MenuItem } from "@mui/material";
import Icons from "@components/Icon";
import { ReactComponent as BurgerIcon } from "@assets/icons/burger-menu-icon.svg";
import { ReactComponent as ArrowIcon } from "@assets/icons/arrow-icon.svg";
import { SCROLL_LIMIT } from "consts/data";
import "./header.css";
import { INavItem } from "types";

type IHeaderProps = {
	logo: {
		url: string;
		to: string;
	};
	navigation: INavItem[];
};

const Header: React.FC<IHeaderProps> = ({ logo, navigation }) => {
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
						{navigation.map(item => (
							<MenuItem
								key={item.title}
								component={Link}
								to={`#${item.path}`}
								onClick={handleMenuClose}
								style={{
									margin: "0px",
									display: "block",
									fontFamily: "Manrope",
								}}
							>
								{item.title}
							</MenuItem>
						))}
					</Menu>
				</div>

				{/* Горизонтальное меню для Desktop */}
				<div className="block-desk">
					<Link to={logo.to}>
						<Typography
							key="logo"
							sx={{
								display: "block",
								color: "inherit",
								textDecoration: "none",
								margin: "0px",
							}}
						>
							<Icons path={logo.url} id="logo" size={40} />
							{/* <LogoIcon /> */}
						</Typography>
					</Link>
					{navigation.map(item => (
						<Typography
							key={item.title}
							component={Link}
							to={`#${item.path}`}
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
							{item.title}
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
