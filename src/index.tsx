import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { DataProvider } from "services/context";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AccountPage from "pages/Account";

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
			<DataProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="account/*" element={<AccountPage />} />
				</Routes>
			</DataProvider>
		</BrowserRouter>
	</React.StrictMode>
);
