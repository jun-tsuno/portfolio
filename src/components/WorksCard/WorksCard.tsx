import { WorksType } from "../../types/types";
import {
	StyledCard,
	StyledImageBox,
	StyledTextBox,
	StyledButtonBox,
	StyledWorkTitle,
} from "../../pages/Works/WorksStyle";
import { SecondaryButton } from "../Button/ButtonStyle";
import { BiLinkExternal } from "react-icons/bi";

interface IProps {
	work: WorksType;
}

const WorksCard = ({ work }: IProps) => {
	const { title, image, demoLink, gitLink, skillUsed, desc } = work;
	return (
		<>
			<StyledCard>
				<StyledImageBox>
					<img src={image} alt="project-image" />
				</StyledImageBox>
				<StyledTextBox>
					<StyledWorkTitle>
						<a href={demoLink} target="black">
							{title}
							<span>
								<BiLinkExternal />
							</span>
						</a>
					</StyledWorkTitle>
					<p>{desc}</p>
					<p>{skillUsed}</p>
					<StyledButtonBox>
						<SecondaryButton>SEE MORE</SecondaryButton>
					</StyledButtonBox>
				</StyledTextBox>
			</StyledCard>
		</>
	);
};

export default WorksCard;
