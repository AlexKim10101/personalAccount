import React, { useEffect, useState } from "react";
import { Context } from "./useData";
import { IData } from "types";

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<IData | null>(null);

	const dataExist = !!data;
	const homePage = dataExist ? data.homePage : {};
	const loadingPage = dataExist ? data.loadingPage : {};
	const accountPage = dataExist ? data.accountPage : {};
	const style = dataExist ? data.style : {};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/data.json");
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const jsonData: IData = await response.json();
				console.log("DataProvider", jsonData);
				setData(jsonData);
			} catch (err: unknown) {
				setError((err as Error).message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<Context.Provider
			value={{ loading, error, homePage, loadingPage, accountPage, style }}
		>
			{children}
		</Context.Provider>
	);
};
