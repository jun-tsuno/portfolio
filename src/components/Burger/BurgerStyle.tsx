import styled from "styled-components";

interface IProps {
	open: boolean;
}

export const StyledBurger = styled.div<IProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	width: 1.3rem;
	height: 1.3rem;
	background: ${({ theme }) => theme.palette.bgMenu};
	border-radius: 50%;
	cursor: pointer;
	padding: 0.7rem;
	margin-left: auto;
	z-index: 10;
	position: relative;
	border: 1px solid ${({ theme }) => theme.palette.textPrimary};

	:hover {
		& > div {
			background: ${({ theme }) => theme.palette.accent};
		}
	}

	div {
		width: 1.3rem;
		height: 0.2rem;
		background: ${({ theme }) => theme.palette.textSecondary};
		border-radius: 0.5rem;
		transition: all 0.3s liner;
		position: relative;
		transform-origin: 1px;
		transition: all 0.3s linear;
		z-index: 10;

		:first-child {
			transform: ${({ open }) =>
				open ? "translateX(10%) rotate(45deg)" : "rotate(0)"};
		}
		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(40%)" : "translateX(0)")};
		}
		:last-child {
			transform: ${({ open }) =>
				open ? "translateX(10%) rotate(-45deg)" : "rotate(0)"};
		}
	}
`;
