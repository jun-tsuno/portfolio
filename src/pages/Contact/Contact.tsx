import Button from "../../components/Button/Button";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { StyledSectionTitle } from "../About/AboutStyle";
import {
	StyledContactText,
	StyledContactButton,
	StyledContactIcons,
} from "./ContactStyle";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

const icons = [
	{ id: 1, icon: <IoDocumentTextOutline />, to: "" },
	{ id: 2, icon: <AiFillGithub />, to: "https://github.com/jun-tsuno" },
	{
		id: 3,
		icon: <AiFillLinkedin />,
		to: "https://www.linkedin.com/in/jun-tsunokawa-b22596247",
	},
	{ id: 4, icon: <BsMedium />, to: "https://medium.com/@jun55tsuno" },
	{ id: 5, icon: <AiFillMail />, to: "mailto: jun55tsuno@gmail.com" },
];

const Contact = () => {
	return (
		<div id="contact">
			<SectionWrapper>
				<StyledSectionTitle>
					<span>04. </span>CONTACT
				</StyledSectionTitle>
				<StyledContactText>
					<h4>I'm excited to have opportunities as a web developer!</h4>
					<p>
						Feel free to say Hi if you have any questions or just want to grab a
						beer or coffee.
					</p>
					<p>
						You can contact me on social media or by sending me an email here.
					</p>
				</StyledContactText>
				<StyledContactButton
					as={motion.div}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					<Button>
						<a href="mailto: jun55tsuno@gmail.com">SAY HELLO</a>
					</Button>
				</StyledContactButton>
				<StyledContactIcons>
					{icons.map(({ id, icon, to }) => {
						return (
							<motion.li
								key={id}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.9 }}
							>
								<a href={to} target="_blank">
									{icon}
								</a>
							</motion.li>
						);
					})}
				</StyledContactIcons>
			</SectionWrapper>
		</div>
	);
};

export default Contact;
