import React from "react";
import { StyledTextBox } from "./AboutTextStyle";

const AboutText = () => {
	return (
		<StyledTextBox>
			<p>
				Hello, my name is Jun Tsunokawa. I'm a Front-End Developer who enjoys
				making things for the Internet.
			</p>
			<br />
			<p>
				As a curious and dedicated personality, I am{" "}
				<strong>constantly looking for ways to better</strong> and grow both
				personally and professionally. On a daily basis, I am continuously
				learning new programming languages and libraries, and I try to think of
				<strong> "what else I can do" </strong> to improve the quality of my
				work. That is the most thrilling aspect of my programming journey!
			</p>
			<br />
			<p>
				Specialized in <strong>JavaScript</strong> and{" "}
				<strong>TypeScript</strong>, including JS frameworks such as React and
				Redux, as well as working on other libraries and tools.
			</p>
		</StyledTextBox>
	);
};

export default AboutText;
