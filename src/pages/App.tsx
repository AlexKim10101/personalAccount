import React from "react";
import Button from "@mui/material/Button";
// import logo from './logo.svg';
import "../index.css";
import { Outlet } from "react-router";
import Header from "widgets/Header";
import Footer from "widgets/Footer";

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<main>
					<Outlet />
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
