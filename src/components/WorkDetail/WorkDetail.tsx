import { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { worksData } from "../../Data/worksData";
import {
	StyledContainer,
	StyledImageBox,
	StyledTop,
	StyledSkillUsed,
	StyledTextBox,
	StyledBack,
} from "./WorkDetailStyle";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

const WorkDetail = () => {
	const { workId } = useParams();
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const selectedData = worksData.filter((work) => {
		return work.id === workId;
	});

	const {
		id,
		title,
		image,
		demoLink,
		gitLink,
		skillUsed,
		desc,
		features,
		challenge,
	} = selectedData[0];

	return (
		<>
			<StyledContainer>
				<StyledBack>
					<Link to={"/"}>
						<IoIosArrowBack />
					</Link>
				</StyledBack>
				<StyledTop>
					<h2>{title}</h2>
					<StyledImageBox>
						<img src={image} />
					</StyledImageBox>
					<StyledSkillUsed>
						{skillUsed.map((ele, i) => {
							return <span key={i}>{ele}</span>;
						})}
					</StyledSkillUsed>
					<div>
						<a href={gitLink} target="_blank">
							<AiFillGithub />
						</a>
						<a href={demoLink} target="_blank">
							<BiLinkExternal />
						</a>
					</div>
				</StyledTop>
				<StyledTextBox>
					<section>
						<h2>Description</h2>
						<p>{desc}</p>
					</section>
					<section>
						<h2>Features</h2>
						<ul>
							{features.map((ele, i) => {
								return (
									<div key={i}>
										<span>
											<BsPatchCheck />
										</span>
										<li>{ele}</li>
									</div>
								);
							})}
						</ul>
					</section>
					<section>
						<h2>Challenging Part</h2>
						{challenge?.map((ele, i) => {
							return <p key={i}>{ele}</p>;
						})}
					</section>
				</StyledTextBox>
			</StyledContainer>
		</>
	);
};

export default WorkDetail;
