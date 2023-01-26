import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
	const [text] = useTypewriter({
		words: [
			"<OPEN TO NEW/>",
			"<WORLD TRAVELER/>",
			"<HARD WORKING/>",
			"<MOVIE FAN/>",
		],
		loop: false,
		typeSpeed: 100,
		delaySpeed: 2000,
	});

	return (
		<>
			<span style={{ paddingRight: "0" }}>{text}</span>
			<Cursor cursorBlinking={false} />
		</>
	);
};

export default TypeWriter;
