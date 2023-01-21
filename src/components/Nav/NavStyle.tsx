import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMenu = styled.ul`
	display: flex;
	justify-content: end;
	align-items: center;
`;

export const StyledLink = styled(motion.li)`
	padding: 0 0.8rem;

	a {
		color: ${({ theme }) => theme.palette.primary};
	}
`;

export const StyledBtn = styled(motion.div)`
	width: 4rem;
	padding: 0 0.8rem;
`;
