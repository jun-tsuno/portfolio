import styled from "styled-components";

export const StyledBurger = styled.div`
	position: absolute;
	top: 5%;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;

	& div {
		width: 2rem;
		height: 0.25rem;
		background: black;
		border-radius: 0.5rem;
		transition: all 0.3s liner;
		position: relative;
		transform-origin: 1px;
	}
`;
