import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WriteCodePage from "./pages/WriteCodePage";
import ExplainCodePage from "./pages/ExplainCodePage";

import "@fontsource/source-code-pro";
import "./assets/index.css";

import ReactGA from "react-ga4";

ReactGA.initialize("G-45PW2SH6DH");

const pageTitle = "CodeGPT Ninja |";

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<WriteCodePage title={`${pageTitle} Write Code`} />} />
				<Route path="explain" element={<ExplainCodePage title={`${pageTitle} Explain Code`} />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
