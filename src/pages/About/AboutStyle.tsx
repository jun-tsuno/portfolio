import styled from "styled-components";
import StyledContentsWrapper from "../../components/ContentsWrapper/ContentsWrapper";
import { bp } from "../../styles/globalStyles";
import { motion } from "framer-motion";

export const StyledSection = styled(motion.section)`
	background: ${({ theme }) => theme.palette.bgSecondary};
	position: relative;
	margin-bottom: 4rem;

	::before {
		content: "";
		height: 4rem;
		background-color: ${({ theme }) => theme.palette.bgSecondary};
		position: absolute;
		top: 0;
		left: 0;
		transform: translateY(-99%);
		width: 100%;
		display: block;
		clip-path: polygon(
			100% 100%,
			0% 100%,
			0% 44.14%,
			25% 87.59%,
			50% 44.14%,
			75% 0.69%,
			100% 44.14%
		);
	}

	::after {
		content: "";
		height: 4rem;
		background-color: ${({ theme }) => theme.palette.bgSecondary};
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		display: block;
		clip-path: polygon(
			100% 0%,
			0% 0%,
			0% 31.62%,
			33.33% 94.23%,
			66.67% 11.89%,
			100% 59.47%
		);
	}
`;

export const StyledAboutWrapper = styled(StyledContentsWrapper)`
	display: flex;
	flex-direction: column;
`;

export const StyledSectionTitle = styled.h3`
	span {
		background-color: ${({ theme }) => theme.palette.accent};
		border-radius: 50%;
		padding: 0.35rem;
		margin-right: 0.6rem;
		color: ${({ theme }) => theme.palette.textSecondary};
	}
	justify-content: center;
`;

export const StyledTextField = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: center;

	@media ${bp.md} {
		flex-direction: row;
		justify-content: center;
	}
`;

export const StyledTextWrapper = styled.div`
	width: 90%;
	max-width: 30rem;
	margin: 0;
`;

export const StyledInfoWrapper = styled.div`
	width: 100%;
`;

export const StyledImage = styled.div`
	width: 15rem;
	position: relative;
	align-self: center;

	@media ${bp.md} {
		min-width: 14rem;
		align-self: flex-start;
		margin-top: 1rem;
	}

	@media ${bp.lg} {
		min-width: 19rem;
		padding-left: 5rem;
	}

	img {
		object-fit: cover;
		margin: 0 auto;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 0.5rem solid lightgray;
		box-sizing: border-box;
	}
`;
