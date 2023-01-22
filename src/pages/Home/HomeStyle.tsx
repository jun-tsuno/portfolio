import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledHero = styled.div`
	width: 90%;
	margin: 5rem auto;
	text-align: center;

	@media ${bp.sm} {
		text-align: start;
	}
`;

export const StyledName = styled.h1`
	line-height: 2.5rem;
	margin: 1rem 0;
	span {
		color: ${({ theme }) => theme.palette.accent};
		font-size: 1.3rem;

		@media ${bp.sm} {
			font-size: 1.5rem;
		}

		@media ${bp.md} {
			font-size: 2rem;
		}
	}

	@media ${bp.md} {
		line-height: 4.3rem;
		margin: 1.5rem 0;
	}
`;

export const StyledText = styled.h1`
	font-size: 1.4rem;
	margin: 0;

	span {
		color: ${({ theme }) => theme.palette.accent};
	}

	@media ${bp.sm} {
		font-size: 1.5rem;
	}

	@media ${bp.md} {
		font-size: 2rem;
	}
`;
