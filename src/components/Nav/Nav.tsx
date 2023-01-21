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
					<StyledLink as={motion.li} key={id} whileHover={{ scale: 1.3 }}>
						<a href={to}>{name}</a>
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
