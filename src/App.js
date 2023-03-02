import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import WriteCodePage from "./pages/WriteCodePage";
import WriteUnitTestPage from "./pages/WriteUnitTestPage";
import ExplainCodePage from "./pages/ExplainCodePage";

import "@fontsource/source-code-pro";
import "./style.css";

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<WriteCodePage />} />
				<Route path="explain" element={<ExplainCodePage />} />
				<Route path="unittest" element={<WriteUnitTestPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
