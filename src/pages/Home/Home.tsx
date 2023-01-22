import { useState } from "react";
import Header from "../../components/Header/Header";
import {
	StyledHeader,
	StyledHero,
	StyledName,
	StyledText,
	StyledTransition,
	StyledSwapContainer,
} from "./HomeStyle";
import TextSwap from "../../components/TextSwap/TextSwap";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Home = () => {
	return (
		<div>
			<StyledHeader>
				<Header />
			</StyledHeader>
			<StyledHero>
				<StyledName>
					<span>Hi, I'm</span> <br />
					Jun Tsunokawa
				</StyledName>
				<StyledText>
					A <span>Front-End Developer </span>
					<br />
					Based in Vancouver
				</StyledText>
				<StyledTransition>
					<h1>
						🙋‍♂️<span>=</span>
					</h1>
					<StyledSwapContainer>{/* <TextSwap /> */}</StyledSwapContainer>
				</StyledTransition>
			</StyledHero>
			<SocialMedia />
		</div>
	);
};

export default Home;
