import styled from "styled-components";
import { motion } from "framer-motion";
import { bp } from "../../styles/globalStyles";

interface IProps {
	children: JSX.Element | JSX.Element[];
}

const StyledContentsWrapper = styled(motion.section)`
	width: 85%;
	max-width: 70rem;
	margin: 0 auto;
	padding: 3rem 0;

	@media ${bp.lg} {
		padding: 4rem 0;
	}
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

const SectionWrapper = ({ children }: IProps) => {
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

export default SectionWrapper;
