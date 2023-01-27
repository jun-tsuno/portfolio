import styled from "styled-components";
import { bp } from "../../styles/globalStyles";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

export const StyledAboutWrapper = styled(SectionWrapper)`
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
	height: 15rem;
	position: relative;
	align-self: center;

	@media ${bp.md} {
		min-width: 14rem;
		min-height: 14rem;
		align-self: flex-start;
		margin-top: 1rem;
	}

	@media ${bp.lg} {
		min-width: 19rem;
		min-height: 19rem;
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
