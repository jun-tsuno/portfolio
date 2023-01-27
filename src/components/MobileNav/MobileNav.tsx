import { useState } from "react";
import Burger from "../Burger/Burger";
import { BaseButton } from "../Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";
import {
	StyledContainer,
	StyledMenu,
	StyledNav,
	StyledNavBtn,
	StyledLink,
} from "./MobileNavStyle";
import { Links } from "../../types/types";
import { useMediaQuery } from "react-responsive";
import { bp } from "../../styles/globalStyles";
import { Link } from "react-scroll";

interface IProps {
	links: Links[];
}

const navAnimation = {
	narrow: {
		width: "50%",
		transition: { duration: 0.4 },
	},
	wide: {
		width: "100%",
		transition: { duration: 0.4 },
	},
};

const sideVariants = {
	close: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.15,
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

const MobileNav = ({ links }: IProps) => {
	const [open, setOpen] = useState(false);
	const isSmall: boolean = useMediaQuery({ query: `${bp.sm}` });

	return (
		<>
			<Burger handleOpen={() => setOpen(!open)} open={open} />
			<AnimatePresence>
				{open && (
					<StyledNav
						initial={{ width: 0 }}
						animate={isSmall ? navAnimation.narrow : navAnimation.wide}
						exit={{ width: 0, transition: { delay: 0.5, duration: 0.4 } }}
					>
						<StyledMenu
							as={motion.div}
							initial="close"
							animate="open"
							exit="close"
							variants={sideVariants}
						>
							{links.map(({ name, to, id }) => {
								return (
									<StyledContainer
										as={motion.div}
										key={id}
										variants={listVariants}
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 17,
										}}
									>
										<Link
											to={to}
											smooth={true}
											offset={-70}
											duration={800}
											key={id}
											onClick={() => setOpen(false)}
										>
											<StyledLink as={motion.div}>{name}</StyledLink>
										</Link>
									</StyledContainer>
								);
							})}
							<StyledContainer
								as={motion.li}
								whileHover={{ scale: 1.3 }}
								variants={listVariants}
							>
								<StyledNavBtn>
									<BaseButton>RESUME</BaseButton>
								</StyledNavBtn>
							</StyledContainer>
						</StyledMenu>
					</StyledNav>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNav;
