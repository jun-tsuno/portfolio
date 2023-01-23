import React from "react";
import AboutInfo from "../../components/Desctiptions/AboutInfo";
import AboutText from "../../components/Desctiptions/AboutText";
import {
	StyledSection,
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
				<div>
					<h3>ABOUT ME</h3>
				</div>
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
