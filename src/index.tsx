import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "normalize.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./pages/App";
import Home from "./pages/Home";
import Account from "./pages/Account";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="account" element={<Account />} />
				</Route>
				<Route path="login" element={<Account />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
