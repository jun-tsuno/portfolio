import styled from "styled-components";

export const BaseButton = styled.button`
	background-color: ${({ theme }) => theme.palette.accent};
	border: 1px solid ${({ theme }) => theme.palette.accent};
	color: ${({ theme }) => theme.palette.primary};
	padding: 0.45rem 0.5rem 0.3rem 0.5rem;
	width: 100%;
	font-size: 1rem;
	border-radius: 0.2rem;
	text-align: center;

	cursor: pointer;
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: ${({ theme }) => theme.palette.secondary};
	border: 1px solid ${({ theme }) => theme.palette.secondary};
	color: ${({ theme }) => theme.palette.primary};
`;
