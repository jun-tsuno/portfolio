import styled from "styled-components";
import { bp } from "../../styles/globalStyles";

export const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 16rem;
	min-width: 16rem;
	margin: 0 auto;
	text-align: center;

	@media ${bp.md} {
		:hover {
			animation: positionUp 0.3s forwards;
		}
	}

	@keyframes positionUp {
		to {
			transform: translateY(-3%);
		}
	}
`;

export const StyledImageBox = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-bottom: -1.5rem;
	z-index: 1;

	& img {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
		aspect-ratio: 2 / 1.1;
	}
`;

export const StyledTextBox = styled.div`
	background-color: ${({ theme }) => theme.palette.bgMenu};
	padding: 0 1rem;
	padding-top: 8%;
	border-radius: 0.5rem;
	z-index: 0;
	aspect-ratio: 1 / 1.1;
	display: flex;
	flex-direction: column;
	flex-grow: 1;

	& p {
		color: ${({ theme }) => theme.palette.textSecondary};
		font-size: 0.9rem;
		flex-grow: 1;
	}
`;

export const StyledWorkTitle = styled.h4`
	font-size: 1.2rem;
	margin: 0;
	padding: 1.3rem 0;
	color: ${({ theme }) => theme.palette.textSecondary};
	display: flex;
	justify-content: center;
	align-items: center;

	& a {
		color: ${({ theme }) => theme.palette.strong};
		display: flex;

		:hover {
			color: ${({ theme }) => theme.palette.tintAccent};
		}
	}

	& span {
		display: inline-flex;
		align-items: center;
		padding-left: 0.5rem;
	}
`;

export const StyledSkills = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 0;

	& li {
		color: ${({ theme }) => theme.palette.strong};
		padding: 0.2rem;
	}
`;

export const StyledButtonBox = styled.div`
	width: 6rem;
	padding: 1rem;
	margin: 0 auto;
`;
