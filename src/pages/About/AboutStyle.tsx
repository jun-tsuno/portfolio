import styled from "styled-components";

export const StyledSection = styled.section`
	padding: 0 5%;
	margin: 0 auto;
	background: ${({ theme }) => theme.palette.bgSecondary};
	display: flex;
	flex-direction: column;
`;

export const StyledTitle = styled.div`
	width: 100%;
`;

export const StyledImage = styled.div`
	width: 14rem;
	z-index: 0;
	position: relative;
	align-self: center;

	img {
		object-fit: cover;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		display: inline;
		border: 0.4rem solid white;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
	}

	::after {
		content: "";
		width: 14rem;
		height: 14rem;
		background: #bfbfbf;
		z-index: -1;
		border: 0.4rem solid white;
		position: absolute;
		top: 0;
		left: -0.5rem;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		transform: rotate(-4deg);
		backface-visibility: hidden;
	}

	::before {
		content: "";
		width: 14rem;
		height: 14rem;
		background: #7e8176;
		z-index: -1;
		border: 0.4rem solid white;
		position: absolute;
		top: 7px;
		left: 0;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		transform: rotate(4deg);
		backface-visibility: hidden;
	}
`;
