import { WorksType } from "../../types/types";
import {
	StyledCard,
	StyledImageBox,
	StyledTextBox,
	StyledButtonBox,
	StyledWorkTitle,
	StyledSkills,
} from "./WorksCardStyle";
import { SecondaryButton } from "../Button/ButtonStyle";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

interface IProps {
	work: WorksType;
}

const WorksCard = ({ work }: IProps) => {
	const { id, title, image, demoLink, gitLink, skillUsed, desc } = work;

	return (
		<>
			<StyledCard>
				<StyledImageBox>
					<a href={demoLink} target="_blank">
						<img src={image} alt="project-image" />
					</a>
				</StyledImageBox>
				<StyledTextBox>
					<StyledWorkTitle>
						<a href={demoLink} target="_blank">
							{title}
							<span>
								<BiLinkExternal />
							</span>
						</a>
					</StyledWorkTitle>
					<p>{desc}</p>
					<StyledSkills>
						{skillUsed.map((el, i) => {
							return <li key={i}>{el}</li>;
						})}
					</StyledSkills>
					<Link to={`/work/${id}`}>
						<StyledButtonBox>
							<SecondaryButton>SEE MORE</SecondaryButton>
						</StyledButtonBox>
					</Link>
				</StyledTextBox>
			</StyledCard>
		</>
	);
};

export default WorksCard;
