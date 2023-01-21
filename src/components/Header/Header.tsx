import { useState } from "react";
import {
	StyledNav,
	StyledMenu,
	StyledNavBtn,
	StyledLi,
	StyledHeader,
	StyledLogo,
} from "./HeaderStyle";
import Burger from "../Burger/Burger";
import { SecondaryButton } from "../Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import { bp } from "../../styles/globalStyles";

const links = [
	{ name: "ABOUT", to: "#", id: 1 },
	{ name: "SKILLS", to: "#", id: 2 },
	{ name: "WORKS", to: "#", id: 3 },
	{ name: "CONTACT", to: "#", id: 4 },
];

const sideVariants = {
	close: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.25,
			staggerDirection: 1,
		},
	},
};

const listVariants = {
	close: {
		opacity: 0,
	},
	open: { opacity: 1 },
};

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const isMedium = useMediaQuery(`${bp.md}`);

	return (
		<StyledHeader>
			<StyledLogo>LOGO</StyledLogo>
			<Burger handleOpen={() => setOpen(!open)} open={open} />
			<AnimatePresence>
				{open && (
					<StyledNav
						initial={{ width: 0 }}
						animate={{
							width: "100%",
							transition: { delay: 0.2, duration: 0.3 },
						}}
						exit={{ width: 0, transition: { delay: 0.5, duration: 0.4 } }}
					>
						<StyledMenu
							as={motion.ul}
							initial="close"
							animate="open"
							exit="close"
							variants={sideVariants}
						>
							{links.map(({ name, to, id }) => {
								return (
									<StyledLi
										as={motion.li}
										key={id}
										whileHover={{ scale: 1.3 }}
										variants={listVariants}
									>
										<a href={to}>{name}</a>
									</StyledLi>
								);
							})}
							<StyledLi
								as={motion.li}
								whileHover={{ scale: 1.3 }}
								variants={listVariants}
							>
								<StyledNavBtn>
									<SecondaryButton>RESUME</SecondaryButton>
								</StyledNavBtn>
							</StyledLi>
						</StyledMenu>
					</StyledNav>
				)}
			</AnimatePresence>
		</StyledHeader>
	);
};

export default Navigation;
