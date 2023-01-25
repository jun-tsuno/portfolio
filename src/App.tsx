import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Home />
			<About />
			<Skills />
		</ThemeProvider>
	);
};

export default App;
