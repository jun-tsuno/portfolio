import { Link } from "../../types/types";
import { StyledMenu, StyledLink, StyledBtn } from "./NavStyle";
import { motion } from "framer-motion";
import { BaseButton } from "../Button/ButtonStyle";

interface IProps {
	links: Link[];
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
					<StyledLink
						as={motion.a}
						href={to}
						key={id}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						variants={item}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						{name}
					</StyledLink>
				);
			})}
			<StyledBtn as={motion.div} variants={item}>
				<BaseButton as={motion.div} whileHover={{ scale: 1.3 }}>
					RESUME
				</BaseButton>
			</StyledBtn>
		</StyledMenu>
	);
};

export default Nav;
