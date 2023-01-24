import styled from "styled-components";

export const StyledTextBox = styled.div`
	width: 100%;
	padding: 2rem 0;

	strong {
		color: ${({ theme }) => theme.palette.textPrimary};
	}
`;
