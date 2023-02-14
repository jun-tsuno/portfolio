import { StyledSkillBox, StyledCard, StyledIcon } from "./SkillIconsStyle";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiRedux,
	SiTailwindcss,
	SiMaterialui,
	SiStyledcomponents,
	SiBootstrap,
	SiFirebase,
	SiGithub,
	SiFigma,
} from "react-icons/si";
import { DiSass } from "react-icons/di";

const icons = [
	{ icon: <SiHtml5 />, name: "HTML" },
	{ icon: <SiCss3 />, name: "CSS" },
	{ icon: <SiJavascript />, name: "JavaScript" },
	{ icon: <SiTypescript />, name: "TypeScript" },
	{ icon: <SiReact />, name: "React" },
	{ icon: <SiNextdotjs />, name: "NextJS" },
	{ icon: <SiRedux />, name: "Redux" },
	{ icon: <SiTailwindcss />, name: "TailwindCSS" },
	{ icon: <SiMaterialui />, name: "MUI" },
	{ icon: <SiStyledcomponents />, name: "styled-components" },
	{ icon: <DiSass />, name: "Sass" },
	{ icon: <SiBootstrap />, name: "Bootstrap" },
	{ icon: <SiFirebase />, name: "Firebase" },
	{ icon: <SiGithub />, name: "Github" },
	{ icon: <SiFigma />, name: "Figma" },
];

const SkillIcons = () => {
	return (
		<StyledSkillBox>
			{icons.map((icon, index) => {
				return (
					<StyledCard key={index}>
						<StyledIcon>{icon.icon}</StyledIcon>
						<p>{icon.name}</p>
					</StyledCard>
				);
			})}
		</StyledSkillBox>
	);
};

export default SkillIcons;
