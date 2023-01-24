import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const text = [
	"<OPEN TO NEW/>",
	"<WORLD TRAVELER/>",
	"<HARD WORKER/>",
	"<MOVIE FAN/>",
];

const TextSwap = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 3200);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<TextTransition
			springConfig={presets.wobbly}
			style={{ justifyContent: "center" }}
		>
			{text[index % text.length]}
		</TextTransition>
	);
};

export default TextSwap;
