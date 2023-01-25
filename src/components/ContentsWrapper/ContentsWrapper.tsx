import styled from "styled-components";
import { bp } from "../../styles/globalStyles";
import { motion } from "framer-motion";

interface IProps {
	children: JSX.Element | JSX.Element[];
}

export const StyledContentsWrapper = styled(motion.div)`
	width: 85%;
	max-width: 70rem;
	margin: 0 auto;
	padding-top: 3rem;
	padding-bottom: 2rem;
`;

const ContentsWrapper = ({ children }: IProps) => {
	return <StyledContentsWrapper>{children}</StyledContentsWrapper>;
};

export default ContentsWrapper;
