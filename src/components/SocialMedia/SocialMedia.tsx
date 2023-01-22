import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { StyledContainer, StyledLink } from "./SocialMediaStyle";
import { motion } from "framer-motion";

const icons = [
	<AiFillGithub />,
	<AiFillLinkedin />,
	<BsMedium />,
	<AiFillMail />,
];

const SocialMedia = () => {
	return (
		<StyledContainer>
			{icons.map((icon, index) => {
				return (
					<StyledLink
						key={index}
						as={motion.a}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						{icon}
					</StyledLink>
				);
			})}
		</StyledContainer>
	);
};

export default SocialMedia;
