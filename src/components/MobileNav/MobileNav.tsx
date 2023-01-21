import { useState } from "react";
import Burger from "../Burger/Burger";
import { BaseButton } from "../Button/ButtonStyle";
import { motion, AnimatePresence } from "framer-motion";
import {
	StyledLi,
	StyledMenu,
	StyledNav,
	StyledNavBtn,
} from "./MobileNavStyle";
import { Link } from "../../types/types";

interface IProps {
	links: Link[];
}

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

const MobileNav = ({ links }: IProps) => {
	const [open, setOpen] = useState(false);
	return (
		<>
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
									<BaseButton>RESUME</BaseButton>
								</StyledNavBtn>
							</StyledLi>
						</StyledMenu>
					</StyledNav>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNav;
