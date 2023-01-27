import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import WorksCard from "../../components/WorksCard/WorksCard";
import { StyledSectionTitle } from "../About/AboutStyle";
import { worksData } from "../../Data/worksData";

const Works = () => {
	return (
		<div id="works">
			<SectionWrapper>
				<StyledSectionTitle>
					<span>03. </span>WORKS
				</StyledSectionTitle>
				<div>
					{worksData.map((work) => {
						return <WorksCard key={work.id} work={work} />;
					})}
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Works;
