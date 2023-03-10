import styled from "styled-components";
import { BaseLink } from "../../styles/globalStyles";
import { bp } from "../../styles/globalStyles";
import { motion } from "framer-motion";

export const StyledContainer = styled(motion.div)`
	display: none;
	z-index: 100;

	@media ${bp.lg} {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		top: 50%;
		right: 3%;
		transform: translateY(-50%);
		padding-left: 1rem;

		::before,
		::after {
			content: "";
			width: 1.5px;
			height: 3rem;
			margin: 0.2rem 0;
			background: ${({ theme }) => theme.palette.textPrimary};
		}
	}
`;

export const StyledLink = styled(BaseLink)`
	font-size: 1.3rem;
	padding: 0.1rem;

	& a {
		color: ${({ theme }) => theme.palette.textPrimary};
	}
`;
