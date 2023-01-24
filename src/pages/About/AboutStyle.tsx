import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledSection = styled.section`
	background: ${({ theme }) => theme.palette.bgSecondary};
	position: relative;

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
			0% 73.51%,
			33.33% 6.4%,
			66.67% 87.54%,
			100% 46.06%
		);
	}
`;

export const StyledContents = styled.div`
	padding: 0 5%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	max-width: 60rem;
`;

export const StyledSectionTitle = styled.h3`
	span {
		background-color: ${({ theme }) => theme.palette.accent};
		border-radius: 50%;
		padding: 0.35rem;
		margin-right: 0.6rem;
		color: ${({ theme }) => theme.palette.textSecondary};
	}
`;

export const StyledTextField = styled.div`
	display: flex;
	flex-direction: column;

	@media ${bp.md} {
		flex-direction: row;
	}
`;

export const StyledImage = styled.div`
	width: 15rem;
	z-index: 0;
	position: relative;
	align-self: center;

	@media ${bp.md} {
		min-width: 12rem;
		align-self: flex-start;
		margin-top: 2rem;
	}

	@media ${bp.lg} {
		width: 24rem;
	}

	img {
		object-fit: cover;
		margin: 0 auto;
		max-width: 100%;
		height: 100%;
		display: inline;
		border-radius: 50%;
		border: 0.5rem solid lightgray;
	}

	/* ::after {
		content: "";
		width: 14rem;
		height: 14rem;
		border: 2px solid ${({ theme }) => theme.palette.textPrimary};
		border-radius: 5px;
		background-color: ${({ theme }) => theme.palette.textPrimary};
		z-index: -1;
		position: absolute;
		top: 1rem;
		right: -1rem;
		backface-visibility: hidden;

		@media ${bp.md} {
			width: 12rem;
			height: 12rem;
		}
	} */
`;

export const StyledTextWrapper = styled.div`
	width: 95%;
	margin: 0 auto;

	@media ${bp.md} {
		padding-left: 2.3rem;
		padding-right: 2rem;
	}
`;

export const StyledInfoWrapper = styled.div`
	width: 100%;
`;
