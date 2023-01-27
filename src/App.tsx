import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Home />
			<About />
			<Skills />
			<Works />
		</ThemeProvider>
	);
};

export default App;
