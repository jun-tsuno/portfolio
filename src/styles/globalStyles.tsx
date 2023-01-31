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
		bgPrimary: "#efefef",
		bgMenu: "#0b2942",
		textPrimary: "#24425b",
		textSecondary: "#efefef",
		paragraph: "#3d576d",
		tintParagraph: "#d7d7d7",
		accent: "#f75c24",
		tintAccent: "#f98d66",
		strong: "#b0e5f1",
	},
};

// export const lightTheme = {
// 	palette: {
// 		bgPrimary: "#091322",
// 		bgSecondary: "#282828",
// 		bgMenu: "#0c2d49",
// 		textPrimary: "#d5d5d5",
// 		textSecondary: "#fff",
// 		paragraph: "#beafa4",
// 		accent: "#F97D50",
// 		strong: "#4c9fb2",
// 	},
// };

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        overflow-y: overlay;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.palette.bgPrimary};
        color: ${({ theme }) => theme.palette.textPrimary};
    }

    h1 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 2.3rem;

        @media ${bp.sm} {
            font-size: 2.5rem;
        }

        @media ${bp.md} {
            font-size: 3.6rem;
        }
    }

    h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 1.2rem;

        @media ${bp.sm} {
		font-size: 1.5rem;
	}

        @media ${bp.md} {
		font-size: 1.5rem;
	}
    }

    h3 {
        font-family: 'Roboto Slab', serif;
        font-weight: 900;
        font-size: 1.3rem;
        margin-top: 0;
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;

        ::after {
            content: "";
            border-top: 2px solid #979797;
            width: 3rem;
            margin-left: 1rem;
        }

    }

    h4 {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 1rem;
        padding: 0.3rem;
    }

    p {
        line-height: 1.3;
        margin: 0;
        color: ${({ theme }) => theme.palette.paragraph};
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

export const BaseLink = styled(motion.div)`
	color: ${({ theme }) => theme.palette.textPrimary};
`;
