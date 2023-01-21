import styled from "styled-components";
import { bp } from "../../styles/globalStyles";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
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

export const StyledNav = styled(motion.nav)`
	background-color: seagreen;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
`;

export const StyledMenu = styled(motion.ul)`
	margin: 5rem 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${bp.md} {
		flex: 80%;
		display: flex;
		align-items: center;
		justify-content: end;
	}
`;

export const StyledLi = styled(motion.li)`
	padding: 1rem 1rem;

	& a {
		color: ${({ theme }) => theme.palette.secondary};
	}
`;

export const StyledNavBtn = styled.div`
	padding-top: 1.5rem;
	width: 8rem;
`;
