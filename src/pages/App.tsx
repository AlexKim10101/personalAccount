import React from "react";
import Button from "@mui/material/Button";
// import logo from './logo.svg';
import "../index.css";
import { Outlet } from "react-router";
import Header from "@components/Header";

function App() {
	return (
		<div className="container">
			<Header />
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
