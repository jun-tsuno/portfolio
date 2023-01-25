import SkillIcons from "../../components/SkillIcons/SkillIcons";
import { StyledSectionTitle } from "../About/AboutStyle";
import { StyledSection } from "./SkillsStyle";
import { StyledSkillsWrapper } from "./SkillsStyle";

const Skills = () => {
	return (
		<StyledSection>
			<StyledSkillsWrapper>
				<StyledSectionTitle>
					<span>02.</span> SKILLS
				</StyledSectionTitle>
				<SkillIcons />
			</StyledSkillsWrapper>
		</StyledSection>
	);
};

export default Skills;
