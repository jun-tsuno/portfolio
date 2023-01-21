import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 1rem;
	justify-content: space-between;

	@media ${bp.md} {
		padding-top: 1rem;
	}
`;

export const LeftSection = styled.div`
	flex: 20%;
`;

export const RightSection = styled.div`
	flex: 80%;
`;

export const StyledLogo = styled.div`
	z-index: 10;
	color: orange;

	@media ${bp.md} {
		flex: 20%;
	}
`;
