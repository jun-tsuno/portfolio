import styled from "styled-components";

export const BaseButton = styled.button`
	background-color: ${({ theme }) => theme.palette.primary};
	border: 1px solid ${({ theme }) => theme.palette.primary};
	color: ${({ theme }) => theme.palette.secondary};
	padding: 0.4rem 0.5rem;
	width: 100%;
	font-size: 1rem;
	border-radius: 0.2rem;
	cursor: pointer;
`;

export const SecondaryButton = styled(BaseButton)`
	background-color: ${({ theme }) => theme.palette.secondary};
	border: 1px solid ${({ theme }) => theme.palette.secondary};
	color: ${({ theme }) => theme.palette.primary};
`;
