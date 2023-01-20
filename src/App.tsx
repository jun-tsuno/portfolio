import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "./styles/globalStyles";
import Home from "./pages/Home/Home";

const Test = styled.h1`
	color: ${({ theme }) => theme.palette.text};
`;

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<Home />
		</ThemeProvider>
	);
};

export default App;
