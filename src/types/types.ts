import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			bgPrimary: string;
			bgSecondary: string;
			bgMenu: string;
			textPrimary: string;
			textSecondary: string;
			paragraph: string;
			accent: string;
			strong: string;
		};
	}
}

export interface Links {
	name: string;
	to: string;
	id: number;
}

export interface WorksType {
	id: string;
	title: string;
	image: string;
	demoLink: string;
	gitLink: string;
	skillUsed: string[];
	desc: string;
}
