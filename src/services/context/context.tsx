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

	if (!dataExist) {
		return null;
	}

	const {
		pages: { homePage, accountPage, loadingPage },
		style,
		logo,
	} = data;

	return (
		<Context.Provider
			value={{
				loading,
				error,
				homePage,
				accountPage,
				loadingPage,
				logo,
				style,
			}}
		>
			{children}
		</Context.Provider>
	);
};
