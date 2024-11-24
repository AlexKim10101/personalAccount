import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App";
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
					<Route path="login" element={<Account />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
