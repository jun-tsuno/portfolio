import { useState } from "react";
import {
	StyledNav,
	StyledMenu,
	StyledLogo,
	StyledNavBtn,
} from "./NavigationStyle";
import Burger from "../Burger/Burger";
import Button from "../Button/Button";

const Navigation = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<StyledNav>
			<StyledLogo>LOGO</StyledLogo>
			<Burger open={open} handleOpen={handleOpen} />
			<StyledMenu open={open}>
				<li>
					<a href="#">ABOUT</a>
				</li>
				<li>
					<a href="#">SKILLS</a>
				</li>
				<li>
					<a href="#">WORK</a>
				</li>
				<li>
					<a href="#">CONTACT</a>
				</li>
				<StyledNavBtn>
					<Button>RESUME</Button>
				</StyledNavBtn>
			</StyledMenu>
		</StyledNav>
	);
};

export default Navigation;
