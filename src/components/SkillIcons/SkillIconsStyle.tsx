import styled from "styled-components";

export const StyledSkillBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

export const StyledCard = styled.div`
	width: 5rem;
	padding: 0.5rem;
	text-align: center;
	display: inline-block;

	& > p {
		font-size: 0.8rem;
	}
`;

export const StyledIcon = styled.div`
	font-size: 2.3rem;
`;
