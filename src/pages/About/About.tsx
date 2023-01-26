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

const About = () => {
	return (
		<StyledSection>
			<StyledAboutWrapper>
				<StyledSectionTitle>
					<span>01.</span>ABOUT ME
				</StyledSectionTitle>
				<StyledTextField>
					<StyledTextWrapper>
						<AboutText />
						<AboutInfo />
					</StyledTextWrapper>
					<StyledImage>
						<img src="/img/profile.jpg" alt="profile" />
					</StyledImage>
				</StyledTextField>
			</StyledAboutWrapper>
		</StyledSection>
	);
};

export default About;
