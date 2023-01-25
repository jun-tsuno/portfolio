import Header from "../../components/Header/Header";
import {
	StyledHeader,
	StyledHero,
	StyledName,
	StyledText,
	StyledTransition,
	StyledSwapContainer,
	StyledHome,
} from "./HomeStyle";
import TextSwap from "../../components/TextSwap/TextSwap";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 1.3,
			staggerChildren: 0.25,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 60 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
	return (
		<StyledHome>
			<StyledHeader>
				<Header />
			</StyledHeader>
			<StyledHero
				as={motion.div}
				variants={container}
				initial="hidden"
				animate="show"
			>
				<StyledName as={motion.h1} variants={item}>
					<span>Hi, I'm</span> <br />
					Jun Tsunokawa
				</StyledName>
				<StyledText as={motion.h2} variants={item}>
					A <span>Front-End Developer </span>
					<br />
					Based in Vancouver
				</StyledText>
				<StyledTransition as={motion.div} variants={item}>
					<h1>
						🙋‍♂️<span>=</span>
					</h1>
					<StyledSwapContainer>
						<TextSwap />
					</StyledSwapContainer>
				</StyledTransition>
			</StyledHero>
			<SocialMedia />
		</StyledHome>
	);
};

export default Home;
