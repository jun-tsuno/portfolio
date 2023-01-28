import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledWorksList = styled.div`
	display: grid;
	grid-row-gap: 1.3rem;

	@media ${bp.md} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${bp.xl} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
