import styled from "styled-components";

const StyledFooter = styled.footer`
	font-size: 0.8rem;
	text-align: center;
	padding: 1rem;
	color: ${({ theme }) => theme.palette.textSecondary};
	background-color: ${({ theme }) => theme.palette.bgMenu};
`;

const Footer = () => {
	return (
		<StyledFooter>&copy;2023 Jun Tsunokawa. All Rights Reserved.</StyledFooter>
	);
};

export default Footer;
