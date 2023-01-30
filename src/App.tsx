import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme } from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkDetail from "./components/WorkDetail/WorkDetail";

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Home />
								<About />
								<Skills />
								<Works />
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route path="/work/:workId" element={<WorkDetail />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
