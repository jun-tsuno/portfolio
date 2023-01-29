import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContactText = styled.div`
	text-align: center;

	& h4 {
		font-size: 1.2rem;
	}
`;

export const StyledContactButton = styled(motion.div)`
	width: 8rem;
	margin: 0 auto;
	padding: 1.5rem 0;

	& a {
		color: ${({ theme }) => theme.palette.textPrimary};
	}
`;

export const StyledContactIcons = styled.ul`
	display: flex;
	justify-content: center;

	& a {
		font-size: 2rem;
		padding: 0 0.5rem;
		color: ${({ theme }) => theme.palette.textPrimary};
	}
`;
