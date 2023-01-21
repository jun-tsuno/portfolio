import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			bgPrimary: string;
			bgSecondary: string;
			primary: string;
			secondary: string;
			accent: string;
			marker: string;
		};
	}
}

export interface Link {
	name: string;
	to: string;
	id: number;
}
