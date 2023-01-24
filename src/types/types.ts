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

export interface Link {
	name: string;
	to: string;
	id: number;
}
