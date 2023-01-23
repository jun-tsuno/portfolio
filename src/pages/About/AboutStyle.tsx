import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledSection = styled.section`
	background: ${({ theme }) => theme.palette.bgSecondary};
	position: relative;

	::before {
		content: "";
		height: 3rem;
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
			0% 10.5%,
			33.33% 54.42%,
			66.67% 0.96%,
			100% 61.63%
		);
	}
`;

export const StyledContents = styled.div`
	padding: 0 5%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	max-width: 50rem;
`;

export const StyledTextField = styled.div`
	display: flex;
	flex-direction: column;

	@media ${bp.md} {
		flex-direction: row;
	}
`;

export const StyledImage = styled.div`
	width: 14rem;
	z-index: 0;
	position: relative;
	align-self: center;

	@media ${bp.md} {
		min-width: 12rem;
		align-self: flex-start;
		margin-top: 2rem;
	}

	img {
		object-fit: cover;
		margin: 0 auto;
		max-width: 100%;
		height: 100%;
		display: inline;
		border: 0.6rem solid white;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}

	::after {
		content: "";
		width: 14rem;
		height: 14rem;
		background: #bfbfbf;
		z-index: -1;
		border: 0.6rem solid white;
		position: absolute;
		top: 0;
		left: -0.7rem;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		transform: rotate(-4deg);
		backface-visibility: hidden;

		@media ${bp.md} {
			width: 12rem;
			height: 12rem;
		}
	}

	::before {
		content: "";
		width: 14rem;
		height: 14rem;
		background: #7e8176;
		z-index: -1;
		border: 0.6rem solid white;
		position: absolute;
		top: 7px;
		left: 0.3rem;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		transform: rotate(4deg);
		backface-visibility: hidden;

		@media ${bp.md} {
			width: 12rem;
			height: 12rem;
		}
	}
`;

export const StyledTextWrapper = styled.div`
	width: 95%;
	margin: 0 auto;

	@media ${bp.md} {
		padding-left: 5rem;
		padding-right: 1rem;
	}
`;

export const StyledInfoWrapper = styled.div`
	width: 100%;
`;
