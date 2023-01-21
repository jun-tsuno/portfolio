import { StyledBurger } from "./BurgerStyle";

interface IProps {
	open: boolean;
	handleOpen: () => void;
}

const Burger = ({ handleOpen, open }: IProps) => {
	return (
		<StyledBurger onClick={handleOpen} open={open}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;
