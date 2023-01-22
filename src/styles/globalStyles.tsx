import { createGlobalStyle } from "styled-components";

export const bp = {
	sm: "(min-width: 640px)",
	md: "(min-width: 768px)",
	lg: "(min-width: 1024px)",
	xl: "(min-width: 1280px)",
};

export const lightTheme = {
	palette: {
		bgPrimary: "#fff",
		bgSecondary: "#ecebeb",
		primary: "#0c2d49",
		secondary: "#fff",
		accent: "#f75c24",
		marker: "rgba(247, 92, 36, 0.6)",
	},
};

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'League Spartan', sans-serif;
        font-size: 1.2rem;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.palette.bgPrimary};
        color: ${({ theme }) => theme.palette.primary};
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 1.8rem;

        @media ${bp.sm} {
            font-size: 2.3rem;
        }

        @media ${bp.md} {
            font-size: 3rem;
        }
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 2.5rem;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;
