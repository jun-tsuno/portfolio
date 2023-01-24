import React from "react";
import AboutInfo from "../../components/Desctiptions/AboutInfo";
import AboutText from "../../components/Desctiptions/AboutText";
import {
	StyledSection,
	StyledSectionTitle,
	StyledImage,
	StyledTextWrapper,
	StyledInfoWrapper,
	StyledTextField,
	StyledContents,
} from "./AboutStyle";

const About = () => {
	return (
		<StyledSection>
			<StyledContents>
				<StyledSectionTitle>
					<span>01.</span>ABOUT ME
				</StyledSectionTitle>
				<StyledTextField>
					<StyledImage>
						<img src="/img/profile.png" alt="profile" />
					</StyledImage>
					<StyledTextWrapper>
						<AboutText />
						<AboutInfo />
					</StyledTextWrapper>
				</StyledTextField>
			</StyledContents>
		</StyledSection>
	);
};

export default About;
