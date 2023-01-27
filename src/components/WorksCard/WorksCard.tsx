import React from "react";
import { WorksType } from "../../types/types";

interface IProps {
	work: WorksType;
}

const WorksCard = ({ work }: IProps) => {
	const { title, image, demoLink, gitLink, skillUsed, desc } = work;
	return (
		<>
			<div>
				<div>{title}</div>
			</div>
		</>
	);
};

export default WorksCard;
