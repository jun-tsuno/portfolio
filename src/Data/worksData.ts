import { WorksType } from "../types/types";

export const worksData: WorksType[] = [
	{
		id: "youtube",
		title: "Where's Next Tube",
		image:
			"https://user-images.githubusercontent.com/110567844/215029060-50d61049-82f7-438f-b7aa-ba1fe834a016.png",
		demoLink: "https://wheres-next-tube.vercel.app/",
		gitLink: "https://github.com/jun-tsuno/WheresNextTube.git",
		skillUsed: ["React", "RTKQuery", "tailwind", "chakraUI"],
		desc: `Video searching app where user can search "travel" related videos. You can also add videos to the favorite list.`,
	},
	{
		id: "todoList",
		title: "To-Do List with Database",
		image:
			"https://user-images.githubusercontent.com/110567844/215232206-3595eb8f-c61e-488d-b3bb-ef496c7ca4e6.png",
		demoLink: "",
		gitLink: "https://github.com/jun-tsuno/ts_todolist.git",
		skillUsed: ["React", "TypeScript", "Firebase", "tailwind", "MUI"],
		desc: `CRUD to-do list which has e-mail and password authentication. Input data is stored in Firebase database.`,
	},
];
