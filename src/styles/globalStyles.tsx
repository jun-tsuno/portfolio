import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { motion } from "framer-motion";

export const bp = {
	sm: "(min-width: 640px)",
	md: "(min-width: 768px)",
	lg: "(min-width: 1024px)",
	xl: "(min-width: 1280px)",
};

export const lightTheme = {
	palette: {
		bgPrimary: "#fff",
		bgSecondary: "#efeeee",
		primary: "#0c2d49",
		secondary: "#fff",
		accent: "#f75c24",
		marker: "rgba(244, 108, 59, 0.686)",
		strong: "#00ad7c",
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
        font-size: 1.1rem;
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
        font-size: 1.4rem;

        @media ${bp.sm} {
		font-size: 1.5rem;
	}

        @media ${bp.md} {
		font-size: 2rem;
	}
    }

    h3 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 1.3rem;
        background: linear-gradient(transparent 30%, ${({ theme }) =>
					theme.palette.marker} 50%);
        display: inline-block;
    }

    p {
        line-height: 1.5;
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;

        :hover {
            cursor: pointer;
        }
    }
`;

export const BaseLink = styled(motion.a)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.primary};
`;
