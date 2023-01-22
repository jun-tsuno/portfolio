import { useState } from "react";
import Header from "../../components/Header/Header";
import { StyledHero, StyledName, StyledText } from "./HomeStyle";
import TextTransition, { presets } from "react-text-transition";

const text = ["WORLD TRAVELER", "MOVIE FAN", "HARD WORKER"];

const Home = () => {
	return (
		<div>
			<div>
				<Header />
			</div>
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
				<div>
					<h1>
						🙋‍♂️ <span>=</span>
					</h1>
				</div>
			</StyledHero>
		</div>
	);
};

export default Home;
