import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { StyledContainer, StyledLink } from "./SocialMediaStyle";
import { motion } from "framer-motion";

const icons = [
	{ id: 1, icon: <AiFillGithub />, to: "https://github.com/jun-tsuno" },
	{
		id: 2,
		icon: <AiFillLinkedin />,
		to: "https://www.linkedin.com/in/jun-tsunokawa-b22596247",
	},
	{ id: 3, icon: <BsMedium />, to: "https://medium.com/@jun55tsuno" },
	{ id: 4, icon: <AiFillMail />, to: "mailto: jun55tsuno@gmail.com" },
];

const container = {
	hidden: {
		opacity: 0,
	},
	show: { opacity: 1 },
};

const SocialMedia = () => {
	return (
		<StyledContainer
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="show"
			transition={{ delay: 2.5, duration: 1 }}
		>
			{icons.map(({ id, icon, to }) => {
				return (
					<StyledLink
						key={id}
						as={motion.a}
						href={to}
						target="_blank"
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
