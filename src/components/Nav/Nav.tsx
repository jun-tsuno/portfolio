import React from "react";
import { Link } from "../../types/types";
import { StyledMenu, StyledLink, StyledBtn } from "./NavStyle";
import { motion } from "framer-motion";
import { BaseButton } from "../Button/ButtonStyle";

interface IProps {
	links: Link[];
}

const Nav = ({ links }: IProps) => {
	return (
		<StyledMenu>
			{links.map(({ name, to, id }) => {
				return (
					<StyledLink
						href={to}
						key={id}
						as={motion.a}
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 400, damping: 17 }}
					>
						{name}
					</StyledLink>
				);
			})}
			<StyledBtn>
				<BaseButton as={motion.div} whileHover={{ scale: 1.3 }}>
					RESUME
				</BaseButton>
			</StyledBtn>
		</StyledMenu>
	);
};

export default Nav;
