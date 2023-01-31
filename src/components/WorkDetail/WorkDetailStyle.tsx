import styled from "styled-components";

export const StyledContainer = styled.div`
	background: ${({ theme }) => theme.palette.bgMenu};
	color: ${({ theme }) => theme.palette.textSecondary};
	height: 100%;
	padding: 2rem 0;
	line-height: 1.8rem;
	position: relative;

	& h2 {
		color: ${({ theme }) => theme.palette.strong};
		position: relative;
		display: inline-block;
		::after {
			content: "";
			width: 2rem;
			height: 3px;
			background-color: ${({ theme }) => theme.palette.paragraph};
			border-radius: 8px;
			position: absolute;
			bottom: -20%;
			left: 0;
		}
	}

	& p {
		color: ${({ theme }) => theme.palette.textSecondary};
		font-size: 1.1rem;
		line-height: 1.8rem;
	}
`;

export const StyledBack = styled.div`
	position: absolute;
	top: 4%;
	left: 10%;
	font-size: 2rem;

	& a {
		color: ${({ theme }) => theme.palette.textSecondary};
		display: inline-block;
		:hover {
			cursor: pointer;
			color: ${({ theme }) => theme.palette.tintAccent};
			transform: scale(1.5);
		}
	}
`;

export const StyledTop = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	& h2 {
		::after {
			width: 6rem;
			bottom: -60%;
			left: 50%;
			transform: translateX(-50%);
		}
	}

	& a {
		color: ${({ theme }) => theme.palette.textSecondary};
		font-size: 1.8rem;
		padding: 0 1rem;
		display: inline-block;

		:hover {
			transform: translateY(-10%);
			color: ${({ theme }) => theme.palette.strong};
		}
	}
`;

export const StyledImageBox = styled.div`
	padding-top: 2rem;
	max-width: 25rem;

	& img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		aspect-ratio: 2 / 1.1;
	}
`;

export const StyledSkillUsed = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 1rem 0;

	& > span {
		margin: 5px;
		padding: 0.3rem 0.5rem;
		border: 1px solid ${({ theme }) => theme.palette.tintAccent};
		border-radius: 8px;
	}
`;

export const StyledTextBox = styled.div`
	width: 90%;
	max-width: 35rem;
	margin: 0 auto;
	padding-top: 2.5rem;

	& section {
		padding-bottom: 3rem;
	}

	& ul {
		margin: 0;

		& div {
			display: flex;

			& span {
				padding-right: 0.7rem;
				padding-top: 0.2rem;
				color: ${({ theme }) => theme.palette.strong};
			}
		}
	}
`;
