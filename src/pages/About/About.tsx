import React from "react";
import AboutText from "../../components/Desctiptions/AboutText";
import { StyledSection, StyledTitle, StyledImage } from "./AboutStyle";

const About = () => {
	return (
		<StyledSection>
			<StyledTitle>
				<h3>ABOUT ME</h3>
			</StyledTitle>
			<StyledImage>
				<img src="/img/profile.png" alt="profile" />
			</StyledImage>
			<AboutText />
		</StyledSection>
	);
};

export default About;
