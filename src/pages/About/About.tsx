import AboutInfo from "../../components/Descriptions/AboutInfo";
import AboutText from "../../components/Descriptions/AboutText";
import {
	StyledSectionTitle,
	StyledImage,
	StyledTextWrapper,
	StyledTextField,
	StyledAboutWrapper,
} from "./AboutStyle";

const About = () => {
	return (
		<div id="about">
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
		</div>
	);
};

export default About;
