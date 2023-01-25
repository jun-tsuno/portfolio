import styled from "styled-components";
import { motion } from "framer-motion";

interface IProps {
	children: JSX.Element | JSX.Element[];
}

const StyledContentsWrapper = styled(motion.div)`
	width: 85%;
	max-width: 70rem;
	margin: 0 auto;
	padding-top: 3rem;
	padding-bottom: 2rem;
`;

const container = {
	hidden: {
		opacity: 0,
		y: 60,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

const ContentsWrapper = ({ children }: IProps) => {
	return (
		<StyledContentsWrapper
			as={motion.div}
			variants={container}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{children}
		</StyledContentsWrapper>
	);
};

export default ContentsWrapper;
