import {
	StyledHeader,
	StyledLogo,
	LeftSection,
	RightSection,
} from "./HeaderStyle";
import { bp } from "../../styles/globalStyles";
import MobileNav from "../MobileNav/MobileNav";
import Nav from "../Nav/Nav";
import { useMediaQuery } from "react-responsive";

const links = [
	{ name: "ABOUT", to: "#", id: 1 },
	{ name: "SKILLS", to: "#", id: 2 },
	{ name: "WORKS", to: "#", id: 3 },
	{ name: "CONTACT", to: "#", id: 4 },
];

const Header = () => {
	const isMedium: boolean = useMediaQuery({ query: `${bp.md}` });

	return (
		<StyledHeader>
			<LeftSection>
				<StyledLogo>LOGO</StyledLogo>
			</LeftSection>
			<RightSection>
				{isMedium ? <Nav links={links} /> : <MobileNav links={links} />}
			</RightSection>
		</StyledHeader>
	);
};

export default Header;
