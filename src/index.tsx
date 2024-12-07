import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ScrollToHash from "@components/Scroll";

import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToHash />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
