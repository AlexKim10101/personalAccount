export type IData = {
	homePage: {
		[key: string]: any;
	};
	loadingPage: { [key: string]: any };
	accountPage: { [key: string]: any };
	style: { [key: string]: any };
	[key: string]: any;
};

export type IAboutProductItem = {
	title: string;
	content: string[];
	path: string;
};

export type IDemoDataItem = {
	path: string;
	title: string;
	content: string[];
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

export type ISubmitBtnText = "Зарегистрироваться" | "Войти" | "Сохранить";

export type IAccountData = {
	id: string;
	name: string;
	email: string;
	password: string;
};
