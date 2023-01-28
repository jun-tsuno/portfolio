import styled from "styled-components";

export const BaseButton = styled.button`
	background-color: ${({ theme }) => theme.palette.accent};
	border: 1px solid ${({ theme }) => theme.palette.accent};
	color: ${({ theme }) => theme.palette.textPrimary};
	padding: 0.45rem 0.5rem 0.3rem 0.5rem;
	width: 100%;
	font-size: 1rem;
	border-radius: 0.2rem;
	text-align: center;
	cursor: pointer;
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.palette.accent};
	color: ${({ theme }) => theme.palette.textSecondary};
	font-size: 0.8rem;
	padding: 0.5rem;

	:hover {
		background-color: ${({ theme }) => theme.palette.tintAccent};
		filter: brightness(90%);
	}
`;
