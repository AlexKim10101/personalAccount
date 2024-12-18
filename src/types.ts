export type IData = {
	pages: {
		homePage: {
			id: string;

			sections: {
				main: {
					id: string;
					title: string;
					subtitle: string;
					bgImgPath: string;
					description: {
						title: string;
						content: string;
					};
				};
				clients: {
					id: string;
					description: {
						content: string;
					};
					slider: ISlider;
				};
				aboutProduct: {
					id: string;
					title: string;
					features: { slider: ISlider };
					demo: { slider: ISlider };
				};
				cases: {
					id: string;
					data: ICaseDataItem[];
				};
				prices: {
					id: string;
					title: string;
					versions: IVersionData[];
					conditions: IСonditionsData[];
					tableFields: ITableField[];
				};
				documentation: {
					id: string;
					title: string;
					description: {
						content: string;
					};
					links: ILink[];
				};
				contacts: {
					id: string;
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
			header: { id: string; navigation: INavItem[] };
			footer: { id: string; navigation: INavItem[] };
		};
		loadingPage: { id: string };
		accountPage: { id: string };
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
	title: string;
	description: string;
};

export type IСonditionsData = {
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

export type IRule = {
	required?: string;
	pattern?: { value: any; message: string };
	minLength?: { value: any; message: string };
	maxLength?: { value: any; message: string };
};
