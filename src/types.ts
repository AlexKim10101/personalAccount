export type IAboutProductItem = {
	logo: ReturnType<React.FC>;
	title: string;
	content: string[];
};

export type IDemoDataItem = {
	imgPath: string;
	title: string;
	content: string;
};

export type ICaseDataItem = {
	caption: string;
	description: {
		title: string;
		content: string;
	};
	statisticPoints: {
		title: string;
		content: string;
	}[];
	functionPoints: {
		title: string;
		content: string[];
	};
	slides: string[];
};

type IFieldsName =
	| "price"
	| "totalSurveys"
	| "totalAdmins"
	| "responseCount"
	| "linkCount";

export type IVersionData = {
	id: string;
	title: string;
	data: {
		price: string;
		totalSurveys: string;
		totalAdmins: string;
		responseCount: string;
		linkCount: string;
	};
};

export type ITableField = {
	id: IFieldsName;
	title: string;
};
