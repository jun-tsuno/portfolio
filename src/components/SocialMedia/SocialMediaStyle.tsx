import styled from "styled-components";
import { BaseLink } from "../../styles/globalStyles";
import { bp } from "../../styles/globalStyles";

export const StyledContainer = styled.div`
	display: none;

	@media ${bp.lg} {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		top: 50%;
		right: 4%;
		transform: translateY(-50%);

		::before,
		::after {
			content: "";
			width: 2px;
			height: 3rem;
			margin: 0.2rem 0;
			background: ${({ theme }) => theme.palette.primary};
		}
	}
`;

export const StyledLink = styled(BaseLink)`
	font-size: 1.5rem;
	padding: 0.1rem;
`;