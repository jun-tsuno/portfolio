import styled from "styled-components";
import { motion } from "framer-motion";
import { bp } from "../../styles/globalStyles";

export const StyledNav = styled(motion.nav)`
	background-color: ${({ theme }) => theme.palette.primary};
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;

	@media ${bp.md} {
	}
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
	width: 6rem;
`;
