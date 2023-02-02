import { Links } from "../../types/types";
import { StyledMenu, StyledLink, StyledBtn } from "./NavStyle";
import { motion } from "framer-motion";
import { BaseButton } from "../Button/ButtonStyle";
import { Link } from "react-scroll";

interface IProps {
	links: Links[];
}

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: -30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Nav = ({ links }: IProps) => {
	return (
		<StyledMenu
			as={motion.div}
			variants={container}
			initial="hidden"
			animate="show"
		>
			{links.map(({ name, to, id }) => {
				return (
					<Link to={to} smooth={true} offset={-70} duration={800} key={id}>
						<StyledLink
							as={motion.div}
							key={id}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
							variants={item}
							transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
							{name}
						</StyledLink>
					</Link>
				);
			})}
			<StyledBtn as={motion.div} variants={item}>
				<BaseButton as={motion.div} whileHover={{ scale: 1.3 }}>
					<a href="/img/resume.pdf" target="_blank">
						RESUME
					</a>
				</BaseButton>
			</StyledBtn>
		</StyledMenu>
	);
};

export default Nav;
