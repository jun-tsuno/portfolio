import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

interface IProps {
	open: boolean;
}

export const StyledNav = styled.nav`
	display: flex;

	@media ${bp.md} {
		display: flex;
		align-items: center;
		padding-top: 1rem;
	}
`;

export const StyledLogo = styled.div`
	z-index: 10;

	@media ${bp.md} {
		flex: 20%;
		padding-left: 1rem;
	}
`;

export const StyledMenu = styled.ul<IProps>`
	background-color: seagreen;
	height: 100vh;
	width: 100%;
	margin: 0;
	padding-top: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

	@media ${bp.md} {
		flex: 80%;
		display: flex;
		align-items: center;
		justify-content: end;
	}

	& li {
		padding: 1rem 1rem;
	}

	& a {
		color: ${({ theme }) => theme.palette.secondary};
	}
`;

export const StyledNavBtn = styled.div`
	padding-top: 1.5rem;
	width: 8rem;
`;
