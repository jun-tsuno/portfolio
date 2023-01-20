import styled from "styled-components";

export const ButtonStyle = styled.button`
	padding: 0.4rem 0.5rem;
	width: 100%;
	font-size: 1rem;
	color: ${({ theme }) => theme.palette.secondary};
	background-color: ${({ theme }) => theme.palette.primary};
	border: 0.15rem solid ${({ theme }) => theme.palette.primary};
	border-radius: 0.2rem;
	cursor: pointer;
`;
