import React, { createContext, useContext } from "react";
import { IData } from "types";

type ContextType = {
	loading: boolean;
	error: string | null;
	[key: string]: any;
};

export const Context = createContext<ContextType | undefined>(undefined);

export const useData = (): ContextType => {
	const context = useContext(Context);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
};
