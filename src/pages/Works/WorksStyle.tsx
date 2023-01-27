import styled from "styled-components";

export const StyledCard = styled.div`
	width: 95%;
	margin: 0 auto;
	text-align: center;
`;

export const StyledImageBox = styled.div`
	width: 100%;
	margin: 0 auto;

	& img {
		width: 100%;
	}
`;

export const StyledTextBox = styled.div`
	background-color: ${({ theme }) => theme.palette.bgMenu};
	padding: 0 1rem;

	& p {
		color: ${({ theme }) => theme.palette.textSecondary};
	}
`;

export const StyledWorkTitle = styled.h4`
	font-size: 1.2rem;
	margin: 0;
	padding: 1rem 0;
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

export const StyledButtonBox = styled.div`
	width: 6rem;
	padding: 1rem;
	margin: 0 auto;
`;
