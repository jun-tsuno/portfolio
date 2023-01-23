import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Home />
			<About />
		</ThemeProvider>
	);
};

export default App;
