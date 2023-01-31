import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	justify-content: space-between;

	@media ${bp.md} {
		padding: 0.7rem 2rem;
		background-color: #efefefc2;
	}
`;

export const LeftSection = styled.div`
	flex: 20%;
`;

export const RightSection = styled.div`
	flex: 80%;
`;

export const StyledLogo = styled.div`
	z-index: 100;
	width: 3rem;

	& img {
		width: 100%;
	}

	:hover {
		cursor: pointer;
		transform: scale(1.2);
	}

	@media ${bp.md} {
		flex: 20%;
	}
`;
