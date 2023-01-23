import styled from "styled-components";
import { BaseLink } from "../../styles/globalStyles";
import { bp } from "../../styles/globalStyles";

export const StyledContainer = styled.div`
	display: none;
	z-index: 100;

	@media ${bp.lg} {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		top: 50%;
		right: 1.3%;
		transform: translateY(-50%);

		::before,
		::after {
			content: "";
			width: 1.5px;
			height: 3rem;
			margin: 0.2rem 0;
			background: ${({ theme }) => theme.palette.primary};
		}
	}
`;

export const StyledLink = styled(BaseLink)`
	font-size: 1.3rem;
	padding: 0.1rem;
`;
