export type IData = {
	pages: {
		homePage: {
			id: string;
			navigation: INavItem[];
			sections: {
				main: {
					title: string;
					subtitle: string;
					description: {
						title: string;
						content: string;
					};
				};
				clients: {
					description: {
						content: string;
					};
					slider: ISlider;
				};
				aboutProduct: {
					title: string;
					features: { slider: ISlider };
					demo: { slider: ISlider };
				};
				cases: ICaseDataItem[];
				prices: {
					versions: IVersionData[];
					tableFields: ITableField[];
				};
				documentation: {
					title: string;
					description: {
						content: string;
					};
					links: ILink[];
				};
				contacts: {
					title: string;
					description: {
						content: string;
						address: string;
						phoneNumbers: string[];
						eMail: string;
						info: string;
					};
					links: ILink[];
				};
			};
			header: {};
			footer: {};
		};
		[key: string]: any;
	};
	style: { [key: string]: any };
	[key: string]: any;
};

export type ILink = {
	id: string;
	titlr: string;
	to: string;
};

export type ISliderItem = {
	title: string;
	content: string[];
	path: string;
};

export type ISlider = {
	mobileSlidesToShow: number;
	laptopSlidesToShow: number;
	desctopSlidesToShow: number;
	data: ISliderItem[];
};

export type INavItem = {
	title: string;
	path: string;
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
