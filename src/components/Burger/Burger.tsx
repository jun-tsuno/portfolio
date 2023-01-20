import React from "react";
import { StyledBurger } from "./BurgerStyle";

interface IProps {
	open: boolean;
	handleOpen: () => void;
}

const Burger = ({ open, handleOpen }: IProps) => {
	return (
		<StyledBurger onClick={handleOpen}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;
