import { useState } from "react";
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
import ModalPage from "../../pages/ModalPage/ModalPage";

interface IProps {
	work: WorksType;
}

const WorksCard = ({ work }: IProps) => {
	const { title, image, demoLink, gitLink, skillUsed, desc } = work;
	const [isOpen, setIsOpen] = useState<boolean>(false);

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
					<StyledButtonBox>
						<SecondaryButton onClick={() => setIsOpen(true)}>
							SEE MORE
						</SecondaryButton>
					</StyledButtonBox>
				</StyledTextBox>
				<ModalPage isOpen={isOpen} onClose={() => setIsOpen(false)} />
			</StyledCard>
		</>
	);
};

export default WorksCard;
