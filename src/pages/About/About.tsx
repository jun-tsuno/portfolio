import AboutInfo from "../../components/Descriptions/AboutInfo";
import AboutText from "../../components/Descriptions/AboutText";
import {
	StyledSection,
	StyledSectionTitle,
	StyledImage,
	StyledTextWrapper,
	StyledTextField,
	StyledAboutWrapper,
} from "./AboutStyle";
import { motion } from "framer-motion";

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

const About = () => {
	return (
		<StyledSection>
			<StyledAboutWrapper
				as={motion.div}
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<StyledSectionTitle>
					<span>01.</span>ABOUT ME
				</StyledSectionTitle>
				<StyledTextField>
					<StyledTextWrapper>
						<AboutText />
						<AboutInfo />
					</StyledTextWrapper>
					<StyledImage>
						<img src="/img/profile.png" alt="profile" />
					</StyledImage>
				</StyledTextField>
			</StyledAboutWrapper>
		</StyledSection>
	);
};

export default About;
