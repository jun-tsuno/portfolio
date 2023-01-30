import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import WorksCard from "../../components/WorksCard/WorksCard";
import { StyledSectionTitle } from "../About/AboutStyle";
import { worksData } from "../../Data/worksData";
import { StyledWorksList } from "./WorksStyle";
import { ScrollRestoration } from "react-router-dom";

const Works = () => {
	return (
		<div id="works">
			<SectionWrapper>
				<StyledSectionTitle>
					<span>03. </span>WORKS
				</StyledSectionTitle>
				<StyledWorksList>
					{worksData.map((work) => {
						return <WorksCard key={work.id} work={work} />;
					})}
				</StyledWorksList>
			</SectionWrapper>
			{/* <ScrollRestoration
				getKey={(location, matches) => {
					return location.pathname;
				}}
			/> */}
		</div>
	);
};

export default Works;
