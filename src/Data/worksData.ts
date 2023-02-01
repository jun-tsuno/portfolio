import { WorksType } from "../types/types";

export const worksData: WorksType[] = [
	{
		id: "portfolio",
		title: "Portfolio Page",
		image:
			"https://user-images.githubusercontent.com/110567844/215290656-1c333f54-9c9e-415b-8396-a29dc476ef1b.png",
		demoLink: "https://jun-tsunokawa-portfolio.vercel.app/",
		gitLink: "https://github.com/jun-tsuno/portfolio.git",
		skillUsed: [
			"React",
			"TypeScript",
			"styled-components",
			"framer-motion",
			"ReactRouter",
		],
		desc: `This portfolio page. Styled with styled-components, not relying on CSS frameworks.`,
		features: [
			"Because the portfolio site does not have many complex features, I felt it would be good practise to utilise TypeScript for the type safety.",
			"I split modules and layouts into components as much as possible to make maintenance easier.",
			"Fully responsive design, and simple UI. Dynamically change the content using framer motion animation.",
		],
		challenge: [
			"The most difficult aspect for me was maintaining consistency and making components reusable. All header tags or buttons should share the same fundamental structure and behave the same in responsive layout, yet it's inefficient to format each time I add a component. So, in the globalStyles file, I declare the font size, color, and other basic styling of each tag. This allows me to write code faster as I go.",
			"I was also concerned about the structure of the styled-component file. It is simpler to see the structure of each component when the style and JS are separated.",
		],
	},
	{
		id: "youtube",
		title: "Where's Next Tube",
		image:
			"https://user-images.githubusercontent.com/110567844/215029060-50d61049-82f7-438f-b7aa-ba1fe834a016.png",
		demoLink: "https://wheres-next-tube.vercel.app/",
		gitLink: "https://github.com/jun-tsuno/WheresNextTube.git",
		skillUsed: ["React", "RTKQuery", "tailwind", "chakraUI"],
		desc: `Video searching app where user can search "travel" related videos. You can also add videos to the favorite list.`,
		features: [
			"You can search for travel videos on YouTube by typing keywords into the search box. The query includes the words 'travel' and 'location' by default.",
			"You may see and add your favourite videos to the favourites list. You may also remove videos from your favourites list by clicking the icon.",
			"The navigation bar remains on the screen at all times, and only the pages are replaced.",
		],
		challenge: [
			"At first, I struggled with selecting 'how to construct the store' of this app. When a user selects a video, the information about the video is provided to the Modal, however the props drilling makes the code tough to follow. Also, the favourite videos' information is used across the pages, which led me to use 'Redux' to store 'video' related data in a central location.",
			"In terms of layout, I learned how to use ReactRouter to share the 'navigation bar' across all pages. I read documentation and other blog posts carefully and made it.",
		],
	},
	{
		id: "todoList",
		title: "To-Do List with Database",
		image:
			"https://user-images.githubusercontent.com/110567844/215232206-3595eb8f-c61e-488d-b3bb-ef496c7ca4e6.png",
		demoLink: "https://ts-todolist-r4rmdj09b-jun-tsuno.vercel.app",
		gitLink: "https://github.com/jun-tsuno/ts_todolist.git",
		skillUsed: ["React", "TypeScript", "Firebase", "tailwind", "MUI"],
		desc: `CRUD to-do list which has e-mail and password authentication. Input data is stored in Firebase database.`,
		features: [
			"It supports e-mail and password authentication, and you can create a new user if you don't already have one.",
			"The To Do list includes CRUD functionality, and the data that users enter is dynamically stored and updated in the Firebase database that is associated with each user.",
			"Light & Dark mode",
		],
		challenge: [
			"This is my first project with Firebase, and it was tough to understand how the Firebase storage stores data and how to retrieve the data form components at first. I gained a basic understanding of how to connect a database with CRUD functionality, as well as how to handle asynchronous data fetching.",
			"By adding 'Dark Mode' in this app, I also learned how to override the MaterialUI default styling. It strengthens my understanding of the usage and customization of the UI components.",
		],
	},
	{
		id: "pokemon",
		title: "Multiple API Calling with PokeAPI ",
		image:
			"https://user-images.githubusercontent.com/110567844/215287130-db982e49-3a6c-4489-91ca-71a5a990f98e.png",
		demoLink: "https://shimmering-panda-91d15b.netlify.app/",
		gitLink: "https://github.com/jun-tsuno/pokemon.git",
		skillUsed: ["React", "RTKQuery", "ReactRouter", "tailwind"],
		desc: `To avoid fetching a large amount of data at once, the API will be called each time the user clicks a character.`,
		features: [
			"Multiple API calls are made so that the amount of data fetched in a single call is not too large.",
			"The character can be filtered by name, and the output is dynamically rendered on the page.",
		],
		challenge: [
			"Because the api answer contains a large quantity of data, it was difficult to think of ways to limit the network request and lower the amount of data at a single request. To avoid this, I create a request in each page as it is rendered, and then the following request is sent when the user clicks each character.",
			"This project is a simple but useful example of how to manage multiple API requests in an SPA application.",
		],
	},
	{
		id: "landing-page",
		title: "Company Landing Page",
		image:
			"https://user-images.githubusercontent.com/110567844/215289770-75f9a20c-4b93-4d06-be8d-2613018bc499.png",
		demoLink: "https://geekgearoutdoor-landing-page.netlify.app",
		gitLink: "https://github.com/jun-tsuno/landing_page.git",
		skillUsed: ["HTML", "JavaScript", "Sass"],
		desc: `Landing page for an Imaginary outdoor gear company. I took care of Sass folder structure.`,
		features: [
			"The layout is fully responsive. I took care of the hover effect so that the user could see the same content on desktop and mobile.",
			"Utilized JavaScript observer API, so that CSS animations are occurred in specific timing.",
		],
		challenge: [
			"I had never done a large Sass project before, therefore I had no idea how to arrange the Sass folder properly. I did some study and settled on the modern Sass file structure, 7-1 pattern structure. ",
			"This teaches me that following best practice makes coding cleaner and easier to maintain.",
		],
	},
];
