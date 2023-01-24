import styled from "styled-components";
import { motion } from "framer-motion";
import { BaseLink } from "../../styles/globalStyles";

export const StyledMenu = styled.ul`
	display: flex;
	justify-content: end;
	align-items: center;
	margin: 0;
`;

export const StyledLink = styled(BaseLink)`
	padding: 0 0.8rem;
`;

export const StyledBtn = styled(motion.div)`
	width: 4rem;
	padding: 0 0.8rem;
`;
