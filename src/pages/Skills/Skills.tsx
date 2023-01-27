import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SkillIcons from "../../components/SkillIcons/SkillIcons";
import { StyledSectionTitle } from "../About/AboutStyle";
import { StyledComment } from "./SkillsStyle";

const Skills = () => {
	return (
		<div id="skills">
			<SectionWrapper>
				<StyledSectionTitle>
					<span>02.</span> SKILLS
				</StyledSectionTitle>
				<SkillIcons />
				<StyledComment>...AND LEARNING MORE!</StyledComment>
			</SectionWrapper>
		</div>
	);
};

export default Skills;
