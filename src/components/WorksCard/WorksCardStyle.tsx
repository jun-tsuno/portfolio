import styled from "styled-components";

export const StyledCard = styled.div`
	width: 95%;
	max-width: 17rem;
	margin: 0 auto;
	text-align: center;
	filter: brightness(90%);

	:hover {
		animation: positionUp 0.3s forwards;
		filter: brightness(100%);
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
	z-index: -1;
	aspect-ratio: 1 / 1.1;

	& p {
		color: ${({ theme }) => theme.palette.textSecondary};
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
